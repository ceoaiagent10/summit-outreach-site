import Link from "next/link";
import { Phone } from "lucide-react";

const PHONE = "+1 830-388-7377";
const PHONE_HREF = "tel:+18303887377";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-brand-navy flex items-center justify-center text-white font-bold text-sm">
            SO
          </div>
          <span className="font-bold text-brand-ink text-lg tracking-tight">
            Summit Outreach
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/carrier-vault" className="hover:text-brand-navy transition-colors">
            Carrier Vault
          </Link>
          <Link href="/fleet-advocate" className="hover:text-brand-navy transition-colors">
            Fleet Advocate
          </Link>
          <Link href="/#why-us" className="hover:text-brand-navy transition-colors">
            Why Us
          </Link>
          <Link href="/#contact" className="hover:text-brand-navy transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={PHONE_HREF}
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-blue transition-colors"
          >
            <Phone className="h-4 w-4" />
            {PHONE}
          </a>
          <Link href="/#contact" className="btn-primary !py-2 !px-4 !text-sm">
            Get My Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
