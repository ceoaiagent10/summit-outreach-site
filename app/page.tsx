import Link from "next/link";
import {
  Clock,
  Shield,
  Briefcase,
  Building2,
  Phone,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { CarrierLogos } from "@/components/carrier-logos";

const HERO_BG =
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2400&q=80";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative isolate overflow-hidden bg-brand-navy text-white">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/80 via-brand-navy/60 to-brand-navy/95" aria-hidden />

        <div className="container-x py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-200">
              <Clock className="h-3.5 w-3.5" />
              Same-day quotes · 9 specialty markets
            </p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Commercial Trucking Insurance,{" "}
              <span className="text-orange-400">Done Right.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl">
              Same-day quotes from 9 commercial markets. Built for growing fleets
              across Texas, Florida, and California.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary">
                Get My Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a href="tel:+18303887377" className="btn-secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call (830) 388-7377
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARRIER LOGO TRUST STRIP ===== */}
      <CarrierLogos />

      {/* ===== TWO SERVICE CARDS ===== */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink">
              Two ways we help your fleet
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              One brand for insurance. One for safety. Both built to lower what
              you pay and lift how you run.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Carrier Vault */}
            <Link
              href="/carrier-vault"
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 hover:border-brand-navy hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-brand-navy text-white flex items-center justify-center">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-ink">Carrier Vault</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                We shop your trucking insurance across 9 specialty commercial
                markets — Progressive, Canal, Hudson, Berkshire Hathaway Specialty,
                RLI, Northland, Carolina Casualty, Old Republic, Coverwhale.
                One call. Real options. Same-day indications.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                  9 specialty markets, one application
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                  Same-day quotes and indications
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                  Renewal-timed outreach so you never get blindsided
                </li>
              </ul>
              <span className="inline-flex items-center font-semibold text-brand-navy group-hover:text-brand-blue">
                Shop my insurance
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/* Fleet Advocate */}
            <Link
              href="/fleet-advocate"
              className="group relative rounded-2xl border border-slate-200 bg-white p-8 hover:border-brand-navy hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-ink">Fleet Advocate</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">
                Free CSA safety health check for your fleet. We pull your scores,
                flag the violations costing you premium, and walk you through how
                to fix them — before your insurer notices.
              </p>
              <ul className="space-y-2 mb-6 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                  Full CSA score review across all 7 BASIC categories
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                  Violation analysis with specific premium impact
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-brand-blue flex-shrink-0" />
                  100% free. No obligation. No sales pitch on the call.
                </li>
              </ul>
              <span className="inline-flex items-center font-semibold text-brand-navy group-hover:text-brand-blue">
                Get my free safety check
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== EMPATHY ===== */}
      <section className="bg-slate-50 py-20">
        <div className="container-x max-w-3xl text-center">
          <p className="text-xl sm:text-2xl text-slate-700 leading-relaxed">
            We get trucking. Insurance shouldn&apos;t be the hardest part of running
            your fleet. We built Summit Outreach to make sure your renewal is
            shopped, your safety is monitored, and your phone gets answered the
            first time.
          </p>
        </div>
      </section>

      {/* ===== WHY US ===== */}
      <section id="why-us" className="py-20 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink">
              Why Summit Outreach
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Built for fleets ready to grow. Backed by a licensed broker with
              every major commercial trucking market on file.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Differentiator
              icon={<Clock className="h-6 w-6" />}
              title="Same-Day Quotes"
              body="You give us the info before noon, you have indications in hand by 5pm. That's the standard."
            />
            <Differentiator
              icon={<Briefcase className="h-6 w-6" />}
              title="9 Specialty Markets"
              body="We shop across every major commercial trucking carrier so you see the real range, not just one option."
            />
            <Differentiator
              icon={<Building2 className="h-6 w-6" />}
              title="Real Broker Appointments"
              body="Policies are placed through licensed broker partners with appointments at every market we name — not aggregators, not lead resellers."
            />
            <Differentiator
              icon={<Shield className="h-6 w-6" />}
              title="Safety-First Approach"
              body="We don't just sell coverage. We help you run safer and pay less long-term — that's what Fleet Advocate is for."
            />
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink">
              What fleet owners say
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Real feedback from carriers we&apos;ve helped get covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Testimonial
              quote="Got a quote same morning. Saved us $11K vs. our incumbent renewal. Easiest insurance call I've ever made."
              author="J.R."
              role="Owner, 8-truck flatbed fleet · Texas"
            />
            <Testimonial
              quote="They actually look at our CSA scores. First agent in 7 years who told me what was costing me money — for free."
              author="M.G."
              role="Operations Manager, 14-truck dry van fleet"
            />
            <Testimonial
              quote="Renewal was due in 30 days, I had a folder full of new quotes in a week. Same coverage, way less money."
              author="D.A."
              role="Owner-operator turned 6-truck fleet"
            />
          </div>
          <p className="text-center text-xs text-slate-400 mt-6 italic">
            Initials and roles shown to protect client confidentiality.
          </p>
        </div>
      </section>

      {/* ===== CTA + LEAD FORM ===== */}
      <section id="contact" className="bg-brand-navy text-white py-20 sm:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Ready for better trucking quotes?
            </h2>
            <p className="mt-4 text-lg text-slate-200 leading-relaxed">
              Drop your info. A licensed producer will reach out within one
              business hour with same-day quote options from up to 9 specialty
              markets. Or call now — we answer the phone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="tel:+18303887377" className="btn-secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call (830) 388-7377
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 text-sm">
              <Stat number="9" label="Specialty markets shopped" />
              <Stat number="Same-day" label="Quote turnaround" />
              <Stat number="TX · FL · CA" label="Licensed in 3 states" />
              <Stat number="100%" label="Free safety reviews" />
            </div>
          </div>

          <div className="rounded-2xl bg-brand-ink/40 backdrop-blur p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-2">Get My Quote</h3>
            <p className="text-sm text-slate-300 mb-6">
              Takes 30 seconds. Reach you within the hour.
            </p>
            <LeadForm brand="summit-outreach" page="homepage-cta" variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}

function Differentiator({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 hover:border-brand-navy transition-colors">
      <div className="h-11 w-11 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-brand-ink mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function Testimonial({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 p-6">
      <Quote className="h-6 w-6 text-orange-500 mb-3" />
      <p className="text-slate-700 leading-relaxed mb-4">&ldquo;{quote}&rdquo;</p>
      <div>
        <p className="font-semibold text-brand-ink">{author}</p>
        <p className="text-xs text-slate-500">{role}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-white">{number}</div>
      <div className="text-xs text-slate-300 mt-1">{label}</div>
    </div>
  );
}
