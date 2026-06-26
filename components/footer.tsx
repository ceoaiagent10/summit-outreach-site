import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white mt-24">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-9 w-9 rounded-md bg-white text-brand-navy flex items-center justify-center font-bold">
              SO
            </div>
            <span className="font-bold text-xl">Summit Outreach</span>
          </div>
          <p className="text-sm text-slate-300 max-w-md leading-relaxed">
            Commercial trucking insurance for growing fleets. Same-day quotes from
            9 specialty markets. Serving TX, FL, and CA.
          </p>
          <p className="text-xs text-slate-400 mt-6 leading-relaxed">
            Summit Outreach LLC operates the Carrier Vault and Fleet Advocate
            marketing brands. All insurance services are placed through
            appropriately licensed insurance professionals and carrier partners
            in compliance with applicable state regulations.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-200">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/carrier-vault" className="hover:text-white">Carrier Vault</Link></li>
            <li><Link href="/fleet-advocate" className="hover:text-white">Fleet Advocate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-slate-200">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="/sms-consent" className="hover:text-white">SMS Consent</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Summit Outreach LLC. All rights reserved.</span>
          <span>1621 Central Ave, Cheyenne, WY 82001 · dispatch@thecarriervault.com</span>
        </div>
      </div>
    </footer>
  );
}
