"use server";

/**
 * Server action that creates a contact in GoHighLevel via the Contacts API.
 *
 * Primary path: POST direct to GHL Contacts API (creates contact immediately, every time)
 * Secondary path: Also fire the inbound webhook (so a workflow can still react if/when configured)
 *
 * Required env vars:
 *   GHL_PIT_TOKEN     - Private Integration Token, scope: contacts.write
 *   GHL_LOCATION_ID   - GHL sub-account location ID
 *   GHL_WEBHOOK_URL   - (optional) workflow webhook URL for additional automation
 */
export type LeadFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitLead(
  _prev: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  const token = process.env.GHL_PIT_TOKEN;
  const locationId = process.env.GHL_LOCATION_ID;
  const webhookUrl = process.env.GHL_WEBHOOK_URL;

  if (!token || !locationId) {
    console.error("GHL_PIT_TOKEN or GHL_LOCATION_ID not configured");
    return {
      status: "error",
      message:
        "Form is temporarily unavailable. Please call us at (830) 388-7377.",
    };
  }

  // Honeypot — silently succeed for bots
  if (formData.get("website")) {
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  const fullName = String(formData.get("full_name") || "").trim();
  const company = String(formData.get("company") || "").trim();
  const usdot = String(formData.get("usdot") || "").trim();
  const phoneRaw = String(formData.get("phone") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const brandSource = String(
    formData.get("brand_source") || "summit-outreach"
  );
  const page = String(formData.get("page") || "homepage");

  if (!fullName || !phoneRaw || !email) {
    return {
      status: "error",
      message:
        "Please complete your name, phone, and email so we can reach you.",
    };
  }

  // Split full name -> first/last
  const nameParts = fullName.split(/\s+/);
  const firstName = nameParts[0] || fullName;
  const lastName = nameParts.slice(1).join(" ") || "";

  // Normalize phone to E.164 (assume US if 10 digits)
  const digits = phoneRaw.replace(/\D/g, "");
  let phone = phoneRaw;
  if (digits.length === 10) {
    phone = `+1${digits}`;
  } else if (digits.length === 11 && digits.startsWith("1")) {
    phone = `+${digits}`;
  } else if (digits.length > 0 && !phoneRaw.startsWith("+")) {
    phone = `+${digits}`;
  }

  // Surface USDOT in companyName so it's visible in the contact card
  const companyName =
    company && usdot
      ? `${company} | USDOT ${usdot}`
      : company || (usdot ? `USDOT ${usdot}` : "");

  // Tags carry brand attribution + page + USDOT for searchability
  const tags: string[] = ["website-lead", brandSource];
  if (usdot) tags.push(`usdot-${usdot}`);
  if (page) tags.push(`page-${page}`);

  const apiPayload = {
    firstName,
    lastName,
    name: fullName,
    email,
    phone,
    locationId,
    companyName,
    source: `website-${brandSource}`,
    tags,
  };

  try {
    // PRIMARY: Create contact via GHL Contacts API
    const apiRes = await fetch("https://services.leadconnectorhq.com/contacts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        Version: "2021-07-28",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(apiPayload),
      cache: "no-store",
    });

    if (!apiRes.ok) {
      const errText = await apiRes.text().catch(() => "");
      console.error(
        "GHL Contacts API failed:",
        apiRes.status,
        errText.slice(0, 500)
      );
      // 400 = bad data (e.g. duplicate). Treat duplicates as success so users don't see an error twice.
      if (apiRes.status !== 400) {
        return {
          status: "error",
          message:
            "Something went wrong on our end. Please call (830) 388-7377 and we'll get you covered.",
        };
      }
    }

    // SECONDARY: Fire the webhook too, fire-and-forget (so a workflow can react)
    if (webhookUrl) {
      const webhookPayload = {
        full_name: fullName,
        company,
        usdot,
        phone,
        email,
        brand_source: brandSource,
        page,
        submitted_at: new Date().toISOString(),
      };
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookPayload),
        cache: "no-store",
      }).catch((err) =>
        console.error("Webhook fire-and-forget failed:", err)
      );
    }

    return {
      status: "success",
      message:
        "Thanks! A licensed producer will reach out within one business hour with same-day quote options.",
    };
  } catch (err) {
    console.error("submitLead error:", err);
    return {
      status: "error",
      message:
        "Network hiccup on our side. Please call (830) 388-7377 — we'll get you a quote today.",
    };
  }
}
