import Link from "next/link";
import { Briefcase, Shield, Clock, Building2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About | Summit Outreach — Commercial Trucking Insurance",
  description:
    "Summit Outreach LLC operates Carrier Vault (insurance shopping) and Fleet Advocate (free CSA safety reviews) for growing commercial trucking fleets across Texas, Florida, and California.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-20 sm:py-24">
        <div className="container-x max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-orange-200 mb-6">
            About Summit Outreach
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Built for fleets that want a real shopping partner — not another quote farm.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed">
            Summit Outreach LLC is a Wyoming-registered insurance services
            company focused exclusively on commercial trucking. We operate two
            specialty brands designed to lower what fleet owners pay and lift
            how they run.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-6">
            Why Summit Outreach exists
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-6">
            Most commercial trucking agents quote one or two carriers and call
            it shopping. They make their commission, file the policy, and
            don&apos;t check in until renewal &mdash; usually right when premium
            is already jumping. Fleet owners deserve better.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            We built Summit Outreach to do the work most agents skip: shop
            across every major specialty trucking market, monitor the safety
            data that quietly drives premium, and answer the phone the first
            time a fleet owner calls. Two brands. One mission. Trucking
            insurance, done right.
          </p>
        </div>
      </section>

      {/* The two brands */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink">
              Two brands. One company.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Insurance and safety are two different problems. We split them on
              purpose so each one gets a focused team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link
              href="/carrier-vault"
              className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-brand-navy hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-brand-navy text-white flex items-center justify-center">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-ink">Carrier Vault</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Insurance shopping across 9 specialty commercial trucking
                markets &mdash; one application, same-day quotes, real options
                instead of one rubber-stamp number.
              </p>
              <span className="inline-flex items-center font-semibold text-brand-navy group-hover:text-brand-blue">
                Shop my insurance <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/fleet-advocate"
              className="group rounded-2xl border border-slate-200 bg-white p-8 hover:border-brand-navy hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-lg bg-orange-500 text-white flex items-center justify-center">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-brand-ink">Fleet Advocate</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Free CSA safety health check &mdash; we pull your scores, flag
                the violations costing you premium, and show you exactly how to
                fix them. No insurance pitch on the call.
              </p>
              <span className="inline-flex items-center font-semibold text-brand-navy group-hover:text-brand-blue">
                Get my free safety check <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* What we stand for */}
      <section className="py-20">
        <div className="container-x">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink">
              What we stand for
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Value icon={<Clock className="h-6 w-6" />} title="Same-day responsiveness" body="Quotes by 5pm if you give us the info before noon. The phone gets answered the first time it rings." />
            <Value icon={<Briefcase className="h-6 w-6" />} title="Real market access" body="9 specialty trucking carriers. Not one. Not two. Real range, real options, real comparison." />
            <Value icon={<Shield className="h-6 w-6" />} title="Safety-first thinking" body="Premium is downstream of safety scores. We help fix the root cause, not just shop the policy." />
            <Value icon={<Building2 className="h-6 w-6" />} title="Built for growing fleets" body="Owner-operators turned 5-truck. 14-truck dry van. 25-truck flatbed. The growth zone is where we live." />
          </div>
        </div>
      </section>

      {/* Markets we serve */}
      <section className="bg-slate-50 py-20">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
            Where we operate
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            Summit Outreach is registered in Wyoming and serves commercial
            trucking fleets primarily in <strong>Texas, Florida, and California</strong>.
            All insurance placements happen through appropriately licensed
            insurance professionals and carrier partners in compliance with
            each state&apos;s regulations.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed">
            If you operate a commercial trucking fleet anywhere in TX, FL, or CA
            and you&apos;ve never seen 9 quotes side by side at renewal, the
            shopping conversation is worth one phone call.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy text-white py-20">
        <div className="container-x max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6">
            Ready to see what your insurance could look like?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/carrier-vault" className="btn-primary">
              Get my quote <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/fleet-advocate" className="btn-secondary">
              <Shield className="mr-2 h-4 w-4" />
              Free safety check
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Value({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 bg-white">
      <div className="h-11 w-11 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-brand-ink mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}
