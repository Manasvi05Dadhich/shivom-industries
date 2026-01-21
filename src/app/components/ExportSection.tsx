import { exportProcess } from '@/app/data/products';
import { Check } from 'lucide-react';

export function ExportSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 border border-[var(--warm-grey)]/30 text-xs tracking-[0.15em] text-[var(--warm-grey)] uppercase">
            Export Process
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl text-[var(--deep-charcoal)] mb-4">
            Precision Processing to Global Delivery
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl">
            Our end-to-end export process ensures consistent quality, precision specifications, and timely delivery to
            international markets.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-8 left-8 right-8 h-px bg-[var(--warm-grey)]/20 hidden lg:block" />

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {exportProcess.map((process, idx) => (
              <div key={process.step} className="relative">
                {/* Step number circle */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[var(--deep-charcoal)] text-white mb-6 relative z-10">
                  <div className="text-center">
                    <div className="text-xs tracking-wide">STEP</div>
                    <div className="font-['Cormorant_Garamond'] text-lg">{process.step}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] mb-2">
                  {process.title}
                </h3>
                <p className="text-sm text-[var(--warm-grey)] leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Export capabilities */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-12 bg-[var(--stone-light)] border border-[var(--warm-grey)]/20">
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] mb-4">
              Export Capabilities
            </h4>
            <ul className="space-y-2">
              <ExportFeature text="Container & bulk shipments" />
              <ExportFeature text="Custom packaging solutions" />
              <ExportFeature text="Full export documentation" />
            </ul>
          </div>
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] mb-4">
              Quality Standards
            </h4>
            <ul className="space-y-2">
              <ExportFeature text="ISO-certified processing" />
              <ExportFeature text="Dimensional tolerances ±2mm" />
              <ExportFeature text="Pre-shipment inspection reports" />
            </ul>
          </div>
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] mb-4">
              Global Reach
            </h4>
            <ul className="space-y-2">
              <ExportFeature text="Shipping to 50+ countries" />
              <ExportFeature text="Major port connectivity" />
              <ExportFeature text="Logistics partnership network" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExportFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 text-sm text-[var(--deep-charcoal)]">
      <Check className="w-4 h-4 mt-0.5 text-[var(--muted-bronze)] flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
}
