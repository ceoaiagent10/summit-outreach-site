import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, Briefcase, Clock, Building2 } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Carrier Vault — We Shop Your Trucking Insurance Across 9 Markets | Summit Outreach",
  description: "Same-day quotes from 9 commercial trucking insurance markets. One call. Real options. Built for growing fleets across TX, FL, and CA.",
};

export default function CarrierVaultPage() {
  const markets = [
    { name: "Progressive Commercial", note: "Largest commercial trucking writer in the US" },
    { name: "Canal Insurance", note: "Specialty trucking, decades-long industry roots" },
    { name: "Hudson Insurance Group", note: "Strong specialty / wholesale presence" },
    { name: "Berkshire Hathaway Specialty (BHSI)", note: "Buffett-backed; capacity for fleets that need it" },
    { name: "RLI", note: "Specialty programs, respected by underwriters" },
    { name: "Northland Insurance", note: "Travelers subsidiary, big in commercial auto" },
    { name: "Carolina Casualty", note: "Trucking-specialty focus" },
    { name: "Old Republic", note: "Large commercial auto/trucking writer" },
    { name: "Coverwhale", note: "Newer tech-forward trucking carrier" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-20 sm:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-orange-500/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-200 mb-6">
              <Briefcase className="h-3.5 w-3.5" />
              Carrier Vault — Insurance Shopping
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              We shop your trucking insurance across <span className="text-orange-400">9 specialty markets</span>.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed">
              One call. Real options. Same-day indications. Most agents quote 1–2
              carriers and call it shopping. We shop the market.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#quote" className="btn-primary">Get My Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              <a href="tel:+18303887377" className="btn-secondary">
                <Phone className="mr-2 h-4 w-4" />
                Call (830) 388-7377
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container-x max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink text-center mb-14">
            How Carrier Vault works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Step number="1" title="Tell us about your fleet" body="30 seconds. Name, USDOT, basics. We pull the rest from public records." />
            <Step number="2" title="We shop 9 specialty markets" body="Your back-end submission goes to every carrier with appetite. Quotes come back in hours, not weeks." />
            <Step number="3" title="You pick the best fit" body="Side-by-side comparison. We handle the paperwork, the filing, and the binder." />
          </div>
        </div>
      </section>

      {/* Markets list */}
      <section className="bg-slate-50 py-20">
        <div className="container-x max-w-5xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink text-center mb-4">
            The 9 markets we shop
          </h2>
          <p className="text-center text-slate-600 mb-12">
            All accessed through Southwestern Insurance — a licensed broker holding appointments with each.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {markets.map((m) => (
              <div key={m.name} className="rounded-xl bg-white border border-slate-200 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-brand-ink">{m.name}</p>
                    <p className="text-xs text-slate-500 mt-1">{m.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why we win */}
      <section className="py-20">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-10 text-center">
            Why Carrier Vault wins at renewal
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <Why icon={<Clock className="h-6 w-6" />} title="Speed-to-quote" body="Same day for most fleets. Renewal pressure stops being a problem." />
            <Why icon={<Briefcase className="h-6 w-6" />} title="Real market access" body="9 carriers. Not just the one your agent likes." />
            <Why icon={<Building2 className="h-6 w-6" />} title="Broker-backed" body="Through Southwestern Insurance, we hold real appointments with every market we name." />
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="quote" className="bg-brand-navy text-white py-20">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
              Get your fleet shopped across 9 markets.
            </h2>
            <p className="mt-4 text-lg text-slate-200 leading-relaxed">
              Drop your info — a licensed producer will reach out within one
              business hour with same-day quote options. Free, no obligation.
            </p>
            <a href="tel:+18303887377" className="btn-secondary mt-8 inline-flex">
              <Phone className="mr-2 h-4 w-4" /> Call (830) 388-7377
            </a>
          </div>
          <div className="rounded-2xl bg-brand-ink/40 backdrop-blur p-8 border border-white/10">
            <h3 className="text-xl font-bold mb-2">Shop My Insurance</h3>
            <p className="text-sm text-slate-300 mb-6">Takes 30 seconds. Reach you within the hour.</p>
            <LeadForm brand="carrier-vault" page="carrier-vault" cta="Shop My Insurance" variant="dark" />
          </div>
        </div>
      </section>
    </>
  );
}

function Step({ number, title, body }: { number: string; title: string; body: string }) {
  return (
    <div>
      <div className="h-12 w-12 rounded-full bg-brand-navy text-white flex items-center justify-center text-xl font-bold mb-4">{number}</div>
      <h3 className="text-xl font-bold text-brand-ink mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

function Why({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6">
      <div className="h-11 w-11 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-bold text-brand-ink mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}
