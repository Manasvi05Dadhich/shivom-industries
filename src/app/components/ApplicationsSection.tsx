import { applications } from '@/app/data/products';

export function ApplicationsSection() {
  return (
    <section className="py-32 px-8 md:px-12 lg:px-16 bg-[var(--stone-light)]">
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-block mb-6 px-5 py-2 border border-[var(--warm-grey)]/20 text-xs tracking-[0.2em] text-[var(--warm-grey)] uppercase bg-white/50">
            Applications
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl text-[var(--deep-charcoal)] mb-6 leading-tight tracking-tight">
            Architectural & Landscape Solutions
          </h2>
          <p className="text-lg text-[var(--warm-grey)] max-w-2xl leading-relaxed">
            Our sandstone is engineered for diverse architectural applications, from high-traffic commercial flooring to
            precision landscape installations.
          </p>
        </div>

        {/* Applications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group bg-white border border-[var(--warm-grey)]/15 rounded-2xl p-8 md:p-10 hover:border-[var(--muted-bronze)]/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(23,39,64,0.12)] hover:-translate-y-1"
            >
              <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[var(--deep-charcoal)] mb-4 leading-tight group-hover:text-[var(--muted-bronze)] transition-colors duration-300">
                {app.name}
              </h3>
              <p className="text-base text-[var(--warm-grey)] mb-8 leading-relaxed">{app.description}</p>

              <div className="space-y-4 pt-6 border-t border-[var(--warm-grey)]/10">
                <div>
                  <div className="text-xs text-[var(--warm-grey)] uppercase tracking-wide mb-1">
                    Recommended Finish
                  </div>
                  <div className="text-sm text-[var(--deep-charcoal)]">{app.recommendedFinish.join(', ')}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--warm-grey)] uppercase tracking-wide mb-1">
                    Recommended Thickness
                  </div>
                  <div className="text-sm text-[var(--deep-charcoal)]">{app.recommendedThickness}</div>
                </div>
                <div>
                  <div className="text-xs text-[var(--warm-grey)] uppercase tracking-wide mb-1">Suitability</div>
                  <div className="text-sm text-[var(--deep-charcoal)]">{app.environmentSuitability}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
