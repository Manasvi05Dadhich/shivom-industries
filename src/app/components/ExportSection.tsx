import { exportProcess } from '@/app/data/products';
import { Check } from 'lucide-react';

export function ExportSection() {
  return (
    <section className="py-32 px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-block mb-6 px-5 py-2 border border-[var(--warm-grey)]/20 text-xs tracking-[0.2em] text-[var(--warm-grey)] uppercase bg-[var(--stone-light)]/50">
            Export Process
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl text-[var(--deep-charcoal)] mb-6 leading-tight tracking-tight">
            Precision Processing to Global Delivery
          </h2>
          <p className="text-lg text-[var(--warm-grey)] max-w-2xl leading-relaxed">
            Our end-to-end export process ensures consistent quality, precision specifications, and timely delivery to
            international markets.
          </p>
        </div>

        {/* Process timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-8 left-8 right-8 h-px bg-[var(--warm-grey)]/20 hidden lg:block" />

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {exportProcess.map((process, idx) => (
              <div key={process.step} className="relative group">
                {/* Step number circle */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[var(--deep-charcoal)] to-[var(--yale-blue)] text-white mb-8 relative z-10 shadow-[0_8px_24px_rgba(23,39,64,0.2)] group-hover:shadow-[0_12px_32px_rgba(23,39,64,0.3)] transition-all duration-500 group-hover:scale-110">
                  <div className="text-center">
                    <div className="text-xs tracking-wide font-medium">STEP</div>
                    <div className="font-['Cormorant_Garamond'] text-2xl">{process.step}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-[var(--deep-charcoal)] mb-3 leading-tight">
                  {process.title}
                </h3>
                <p className="text-base text-[var(--warm-grey)] leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Export capabilities */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 p-12 md:p-16 bg-[var(--stone-light)] border border-[var(--warm-grey)]/15 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-2xl text-[var(--deep-charcoal)] mb-6">
              Export Capabilities
            </h4>
            <ul className="space-y-3">
              <ExportFeature text="Container & bulk shipments" />
              <ExportFeature text="Custom packaging solutions" />
              <ExportFeature text="Full export documentation" />
            </ul>
          </div>
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-2xl text-[var(--deep-charcoal)] mb-6">
              Quality Standards
            </h4>
            <ul className="space-y-3">
              <ExportFeature text="ISO-certified processing" />
              <ExportFeature text="Dimensional tolerances ±2mm" />
              <ExportFeature text="Pre-shipment inspection reports" />
            </ul>
          </div>
          <div>
            <h4 className="font-['Cormorant_Garamond'] text-2xl text-[var(--deep-charcoal)] mb-6">
              Global Reach
            </h4>
            <ul className="space-y-3">
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
    <li className="flex items-start gap-3 text-base text-[var(--deep-charcoal)] group/item">
      <Check className="w-5 h-5 mt-0.5 text-[var(--muted-bronze)] flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
      <span className="leading-relaxed">{text}</span>
    </li>
  );
}
