import Link from "next/link";
import { Shield, Phone, ArrowRight, CheckCircle2, AlertTriangle, FileText, TrendingDown } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Fleet Advocate — Free CSA Safety Health Check | Summit Outreach",
  description: "Free CSA safety review for your trucking fleet. We pull your scores, flag violations costing you premium, and walk you through fixing them — before your insurer notices.",
};

export default function FleetAdvocatePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-200 mb-6">
              <Shield className="h-3.5 w-3.5" />
              Fleet Advocate — Free Safety Program
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Your CSA score is quietly costing you money. <span className="text-orange-400">Free check.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed">
              We pull your scores, flag the violations hurting your premium most,
              and hand you a clear plan to fix them. 100% free. No quote pitch on
              the call.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#request" className="btn-primary">Get My Free Safety Check <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <a href="tel:+18303887377" className="btn-secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call (830) 388-7377
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why CSA matters */}
      <section className="py-20">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink">Why CSA scores quietly raise your premium</h2>
            <p className="mt-4 text-lg text-slate-600">
              The gap between clean BASIC scores and alert-range can be <strong>thousands per truck per year</strong>.
              Most fleet owners only find out at renewal — when the premium jumps.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <Card icon={<AlertTriangle className="h-6 w-6" />} title="Insurance carriers price off CSA" body="Underwriters read your BASIC scores. Alerts trigger surcharges. You see the result at renewal, not before." />
            <Card icon={<FileText className="h-6 w-6" />} title="Most agents won't flag it" body="They get paid for binding, not coaching. We do the coaching free — because safer fleets are cheaper to insure." />
            <Card icon={<TrendingDown className="h-6 w-6" />} title="Most violations are fixable" body="Maintenance, HOS, paperwork — many violations age off or can be challenged. We show you which ones." />
          </div>
        </div>
      </section>

      {/* What's in the check */}
      <section className="bg-slate-50 py-20">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink text-center mb-12">What you get — free</h2>
          <div className="space-y-4">
            <Inclusion title="Your CSA Snapshot Report (PDF)" body="Color-coded scores across all 7 BASIC categories. 24-month trend chart. National percentile for fleets your size." />
            <Inclusion title="Violation Cost Analysis" body="Top 5 violations costing you the most premium. Specific impact estimates." />
            <Inclusion title="The 'Three Things to Fix First' Memo" body="Highest-ROI safety actions, ranked by impact on your renewal. Specific to your operation, not generic." />
            <Inclusion title="30-minute review call" body="We walk through the report together. No quote pitch. Promise." />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container-x max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink text-center mb-12">Common questions</h2>
          <div className="space-y-6">
            <FAQ q="Is it really free?" a="Yes. No card, no catch. We earn money only if you later choose us to shop your insurance — and that's a totally separate conversation." />
            <FAQ q="Do I have to buy insurance from you?" a="No. The safety review is yours to keep whether you ever quote with us or not." />
            <FAQ q="How fast?" a="Your review lands within one business day. The 30-minute walk-through can happen the day after." />
            <FAQ q="Will you sell my information?" a="Never. We use your USDOT to pull public FMCSA data. Your info doesn't leave our agency." />
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="request" className="bg-brand-navy text-white py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              See what your scores are costing you.
            </h2>
            <p className="mt-4 text-lg text-slate-200 leading-relaxed">
              Drop your info. Your free CSA Health Check arrives within one
              business day. No card. No obligation. No quote pitch.
            </p>
            <a href="tel:+18303887377" className="btn-secondary mt-8 inline-flex">
              <Phone className="mr-2 h-4 w-4" /> Call (830) 388-7377
            </a>
          </div>
          <div className="rounded-2xl bg-brand-ink/40 backdrop-blur p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-2">Get My Free Safety Check</h3>
            <p className="text-sm text-slate-300 mb-6">Takes 30 seconds. Review lands within one business day.</p>
            <LeadForm brand="fleet-advocate" page="fleet-advocate" cta="Get My Free Safety Check" variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6">
      <div className="h-11 w-11 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-bold text-brand-ink mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function Inclusion({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-6 flex items-start gap-4">
      <CheckCircle2 className="h-6 w-6 text-brand-blue mt-0.5 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-brand-ink mb-1">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
      </div>
    </div>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b border-slate-200 pb-6">
      <h3 className="font-bold text-brand-ink mb-2">{q}</h3>
      <p className="text-slate-600 leading-relaxed">{a}</p>
    </div>
  );
}
