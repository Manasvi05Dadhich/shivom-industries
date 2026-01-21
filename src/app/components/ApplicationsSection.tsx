import { applications } from '@/app/data/products';

export function ApplicationsSection() {
  return (
    <section className="py-24 px-8 bg-[var(--stone-light)]">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 border border-[var(--warm-grey)]/30 text-xs tracking-[0.15em] text-[var(--warm-grey)] uppercase">
            Applications
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl text-[var(--deep-charcoal)] mb-4">
            Architectural & Landscape Solutions
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl">
            Our sandstone is engineered for diverse architectural applications, from high-traffic commercial flooring to
            precision landscape installations.
          </p>
        </div>

        {/* Applications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="bg-white border border-[var(--warm-grey)]/20 p-8 hover:border-[var(--muted-bronze)] transition-colors"
            >
              <h3 className="font-['Cormorant_Garamond'] text-2xl text-[var(--deep-charcoal)] mb-3">
                {app.name}
              </h3>
              <p className="text-sm text-[var(--warm-grey)] mb-6">{app.description}</p>

              <div className="space-y-3 pt-4 border-t border-[var(--warm-grey)]/10">
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
