import { Award, Globe, Shield, Truck } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-32 px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block mb-6 px-5 py-2 border border-[var(--warm-grey)]/20 text-xs tracking-[0.2em] text-[var(--warm-grey)] uppercase bg-[var(--stone-light)]/50">
              About Us
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl text-[var(--deep-charcoal)] mb-8 leading-tight tracking-tight">
              Export-Grade Natural Stone from Rajasthan
            </h2>
            <div className="space-y-6 text-lg text-[var(--warm-grey)] leading-relaxed">
              <p>
                Shiv Om Industries is a leading manufacturer and exporter of premium natural sandstone, sourced
                directly from quarries across Rajasthan, India. With decades of experience in stone processing and
                international trade, we serve architects, importers, and contractors worldwide.
              </p>
              <p>
                Our state-of-the-art processing facilities ensure precision cutting, calibration, and finishing to meet
                exact architectural specifications. We maintain strict quality control standards throughout the
                production process, from block selection to final packaging.
              </p>
              <p>
                Every shipment is backed by comprehensive technical documentation, quality certifications, and export
                compliance standards required for international markets.
              </p>
            </div>
          </div>

          {/* Right: Features grid */}
          <div className="grid grid-cols-2 gap-8">
            <FeatureCard
              icon={<Globe className="w-10 h-10" />}
              title="Global Reach"
              description="Exporting to 50+ countries across 5 continents"
            />
            <FeatureCard
              icon={<Shield className="w-10 h-10" />}
              title="Quality Assured"
              description="ISO-certified processing and rigorous QC standards"
            />
            <FeatureCard
              icon={<Award className="w-10 h-10" />}
              title="Premium Grade"
              description="Architectural-grade stone from premium quarries"
            />
            <FeatureCard
              icon={<Truck className="w-10 h-10" />}
              title="Reliable Delivery"
              description="Consistent supply and on-time global shipments"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group p-8 bg-[var(--stone-light)] border border-[var(--warm-grey)]/10 rounded-2xl transition-all duration-500 hover:border-[var(--muted-bronze)]/30 hover:shadow-[0_12px_32px_rgba(23,39,64,0.1)] hover:-translate-y-1">
      <div className="text-[var(--muted-bronze)] mb-5 transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-[var(--deep-charcoal)] mb-3 leading-tight group-hover:text-[var(--muted-bronze)] transition-colors duration-300">{title}</h3>
      <p className="text-sm md:text-base text-[var(--warm-grey)] leading-relaxed">{description}</p>
    </div>
  );
}
