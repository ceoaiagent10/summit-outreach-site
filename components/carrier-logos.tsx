export function CarrierLogos() {
  const carriers = [
    "Progressive Commercial",
    "Canal Insurance",
    "Hudson Insurance",
    "Berkshire Hathaway Specialty",
    "RLI",
    "Northland",
    "Carolina Casualty",
    "Old Republic",
    "Coverwhale",
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50/60 py-10">
      <div className="container-x">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-500 mb-6">
          We shop your insurance across 9 specialty trucking markets
        </p>
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-x-4 gap-y-4 items-center">
          {carriers.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center px-2 py-3 rounded-md bg-white border border-slate-200 text-center"
            >
              <span className="text-[11px] md:text-xs font-semibold text-slate-600 leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
