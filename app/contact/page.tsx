import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/lead-form";

export const metadata = {
  title: "Contact | Summit Outreach — Commercial Trucking Insurance",
  description:
    "Reach Summit Outreach for commercial trucking insurance quotes and free CSA safety reviews. Phone, email, and quote form.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-navy text-white py-20">
        <div className="container-x max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            Contact Summit Outreach
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed">
            Pick whichever is easiest: call us, email us, or drop your info and a
            licensed producer reaches out within one business hour.
          </p>
        </div>
      </section>

      {/* Contact methods */}
      <section className="py-20">
        <div className="container-x">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <ContactCard
              icon={<Phone className="h-6 w-6" />}
              title="Call us"
              line1="(830) 388-7377"
              line2="Mon–Fri, 8am–6pm CT"
              href="tel:+18303887377"
              cta="Call now"
            />
            <ContactCard
              icon={<Mail className="h-6 w-6" />}
              title="Email us"
              line1="dispatch@thecarriervault.com"
              line2="Replies within 1 business hour"
              href="mailto:dispatch@thecarriervault.com"
              cta="Send email"
            />
            <ContactCard
              icon={<MapPin className="h-6 w-6" />}
              title="Mailing address"
              line1="Summit Outreach LLC"
              line2="1621 Central Ave, Cheyenne, WY 82001"
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start mt-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-4">
                Or drop your info here
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                A licensed producer reaches out within one business hour with
                same-day quote options from up to 9 specialty trucking markets.
                No obligation. No spam. We answer the phone the first time.
              </p>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-brand-ink mb-1">Our response standard</p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Info in before noon CT → quotes in hand by 5pm same day.
                      Info in after noon → first thing next business morning.
                      That&apos;s the standard, not the exception.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-2 text-brand-ink">Get My Quote</h3>
              <p className="text-sm text-slate-600 mb-6">
                Takes 30 seconds. We reach you within the hour.
              </p>
              <LeadForm brand="summit-outreach" page="contact" cta="Get My Quote" variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-brand-navy text-white py-16">
        <div className="container-x text-center max-w-3xl">
          <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed mb-8">
            Prefer to learn about each service first?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/carrier-vault" className="btn-primary">
              Carrier Vault — Insurance Placement <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/fleet-advocate" className="btn-secondary">
              Fleet Advocate — Free Safety Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  title,
  line1,
  line2,
  href,
  cta,
}: {
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
  href?: string;
  cta?: string;
}) {
  return (
    <div className="rounded-xl border border-slate-200 p-6 bg-white">
      <div className="h-11 w-11 rounded-lg bg-brand-navy/10 text-brand-navy flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-brand-ink mb-3 text-lg">{title}</h3>
      <p className="font-semibold text-brand-ink">{line1}</p>
      <p className="text-sm text-slate-600 mt-1">{line2}</p>
      {href && cta && (
        <a
          href={href}
          className="inline-flex items-center mt-4 font-semibold text-brand-navy hover:text-brand-blue text-sm"
        >
          {cta} <ArrowRight className="ml-1 h-4 w-4" />
        </a>
      )}
    </div>
  );
}
