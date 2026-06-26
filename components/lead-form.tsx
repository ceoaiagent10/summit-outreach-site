"use client";

import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { submitLead, LeadFormState } from "@/app/actions";

const initial: LeadFormState = { status: "idle" };

function SubmitButton({ label, disabled }: { label: string; disabled: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending || disabled}
      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : label}
    </button>
  );
}

export function LeadForm({
  brand = "summit-outreach",
  page = "homepage",
  cta = "Get My Quote",
  variant = "dark",
}: {
  brand?: string;
  page?: string;
  cta?: string;
  variant?: "dark" | "light";
}) {
  const [state, formAction] = useFormState(submitLead, initial);
  const [smsConsent, setSmsConsent] = useState(false);

  const label = variant === "dark" ? "text-slate-200" : "text-slate-700";
  const input =
    variant === "dark"
      ? "bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:bg-white/20"
      : "bg-white border border-slate-300 text-brand-ink placeholder:text-slate-400 focus:border-brand-navy";

  if (state.status === "success") {
    return (
      <div className={`rounded-lg p-6 ${variant === "dark" ? "bg-white/10 text-white" : "bg-emerald-50 text-emerald-900 border border-emerald-200"}`}>
        <h3 className="font-bold text-lg mb-1">You&apos;re on the list.</h3>
        <p className="text-sm leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="brand_source" value={brand} />
      <input type="hidden" name="page" value={page} />
      <input type="hidden" name="sms_consent" value={smsConsent ? "yes" : "no"} />
      <input type="text" name="website" tabIndex={-1} aria-hidden className="hidden" />

      <div>
        <label htmlFor="full_name" className={`block text-xs font-medium mb-1 ${label}`}>
          Full Name *
        </label>
        <input
          id="full_name"
          name="full_name"
          type="text"
          required
          autoComplete="name"
          className={`w-full rounded-md px-3 py-2.5 text-sm outline-none ${input}`}
          placeholder="John Smith"
        />
      </div>

      <div>
        <label htmlFor="company" className={`block text-xs font-medium mb-1 ${label}`}>
          Company Name
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          className={`w-full rounded-md px-3 py-2.5 text-sm outline-none ${input}`}
          placeholder="ABC Trucking LLC"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor="usdot" className={`block text-xs font-medium mb-1 ${label}`}>
            USDOT #
          </label>
          <input
            id="usdot"
            name="usdot"
            type="text"
            inputMode="numeric"
            className={`w-full rounded-md px-3 py-2.5 text-sm outline-none ${input}`}
            placeholder="1234567"
          />
        </div>
        <div>
          <label htmlFor="phone" className={`block text-xs font-medium mb-1 ${label}`}>
            Best Phone *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={`w-full rounded-md px-3 py-2.5 text-sm outline-none ${input}`}
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={`block text-xs font-medium mb-1 ${label}`}>
          Best Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={`w-full rounded-md px-3 py-2.5 text-sm outline-none ${input}`}
          placeholder="you@yourtrucking.com"
        />
      </div>

      {/* A2P 10DLC compliant SMS consent — unchecked by default, OPTIONAL (not required to submit) per TCR/CTIA spec */}
      <label
        htmlFor="sms_consent_box"
        className={`flex items-start gap-3 rounded-lg border p-3 cursor-pointer ${
          variant === "dark"
            ? "border-white/20 bg-white/5 hover:bg-white/10"
            : "border-slate-300 bg-slate-50 hover:bg-slate-100"
        }`}
      >
        <input
          id="sms_consent_box"
          type="checkbox"
          checked={smsConsent}
          onChange={(e) => setSmsConsent(e.target.checked)}
          className="mt-1 h-4 w-4 flex-shrink-0 rounded border-slate-300 text-brand-accent focus:ring-brand-accent"
        />
        <span className={`text-[11px] leading-relaxed ${variant === "dark" ? "text-slate-300" : "text-slate-600"}`}>
          <strong className={variant === "dark" ? "text-white" : "text-brand-ink"}>
            (Optional) I agree to receive SMS messages
          </strong>{" "}
          from Summit Outreach, Carrier Vault, and Fleet Advocate regarding my
          insurance quote, safety review, and related follow-up. Msg &amp; data
          rates may apply. Frequency 1&ndash;6/mo. Reply STOP to opt out. Reply
          HELP for help. <em>Checking this box is optional and not required to
          submit this form.</em> See our{" "}
          <a href="/sms-consent" className="underline">SMS Consent</a> and{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </span>
      </label>

      <SubmitButton label={cta} disabled={false} />

      {state.status === "error" && (
        <p className={`text-xs ${variant === "dark" ? "text-orange-300" : "text-red-600"}`}>{state.message}</p>
      )}

      <p className={`text-[11px] leading-relaxed ${variant === "dark" ? "text-slate-400" : "text-slate-500"}`}>
        By submitting, you confirm the information above is accurate and consent
        to be contacted by phone and email regarding your insurance request.
      </p>
    </form>
  );
}
