import { Award, Globe, Shield, Truck } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-1.5 border border-[var(--warm-grey)]/30 text-xs tracking-[0.15em] text-[var(--warm-grey)] uppercase">
              About Us
            </div>
            <h2 className="font-['Cormorant_Garamond'] text-5xl text-[var(--deep-charcoal)] mb-6">
              Export-Grade Natural Stone from Rajasthan
            </h2>
            <div className="space-y-4 text-[var(--warm-grey)] leading-relaxed">
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
          <div className="grid grid-cols-2 gap-6">
            <FeatureCard
              icon={<Globe className="w-8 h-8" />}
              title="Global Reach"
              description="Exporting to 50+ countries across 5 continents"
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Quality Assured"
              description="ISO-certified processing and rigorous QC standards"
            />
            <FeatureCard
              icon={<Award className="w-8 h-8" />}
              title="Premium Grade"
              description="Architectural-grade stone from premium quarries"
            />
            <FeatureCard
              icon={<Truck className="w-8 h-8" />}
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
    <div className="p-6 bg-[var(--stone-light)] border border-[var(--warm-grey)]/10">
      <div className="text-[var(--muted-bronze)] mb-4">{icon}</div>
      <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] mb-2">{title}</h3>
      <p className="text-sm text-[var(--warm-grey)]">{description}</p>
    </div>
  );
}
