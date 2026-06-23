"use server";

/**
 * Server action that posts lead data to GHL Inbound Webhook.
 *
 * Setup:
 *   1. In GHL, create a workflow with trigger "Inbound Webhook"
 *   2. Copy the webhook URL it provides
 *   3. Set GHL_WEBHOOK_URL in Vercel environment variables
 *   4. The workflow should: create/update contact, add tags, move opportunity, notify VA
 */
export type LeadFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("GHL_WEBHOOK_URL is not configured");
    return {
      status: "error",
      message:
        "Form is temporarily unavailable. Please call us at (830) 388-7377.",
    };
  }

  // Honeypot — drop bots
  if (formData.get("website")) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const payload = {
    full_name: String(formData.get("full_name") || "").trim(),
    company: String(formData.get("company") || "").trim(),
    usdot: String(formData.get("usdot") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    brand_source: String(formData.get("brand_source") || "summit-outreach"),
    page: String(formData.get("page") || "homepage"),
    submitted_at: new Date().toISOString(),
  };

  if (!payload.full_name || !payload.phone || !payload.email) {
    return {
      status: "error",
      message: "Please complete your name, phone, and email so we can reach you.",
    };
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("GHL webhook failed:", res.status, await res.text());
      return {
        status: "error",
        message:
          "Something went wrong on our end. Please call (830) 388-7377 and we'll get you covered.",
      };
    }

    return {
      status: "success",
      message:
        "Thanks! A licensed producer will reach out within one business hour with same-day quote options.",
    };
  } catch (err) {
    console.error("GHL webhook error:", err);
    return {
      status: "error",
      message:
        "Network hiccup on our side. Please call (830) 388-7377 — we'll get you a quote today.",
    };
  }
}
