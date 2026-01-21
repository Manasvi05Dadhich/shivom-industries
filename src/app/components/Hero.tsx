import { ArrowRight, Download } from 'lucide-react';
import { MaskContainer } from './ui/svg-mask-effect';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-20 bg-[var(--stone-beige)] overflow-hidden">
      <MaskContainer
        className="min-h-[calc(100vh-5rem)] w-full"
        backgroundImage="/header-bg.jpg"
        revealText={
          <div className="w-full max-w-[1400px] mx-auto px-8 py-24 md:py-32">
            <div className="max-w-3xl text-left">
              <div className="inline-flex items-center gap-2 mb-7 px-4 py-2 rounded-full border border-[var(--warm-grey)]/25 bg-white/80 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--muted-bronze)]" />
                <span className="text-xs tracking-[0.18em] uppercase text-[var(--deep-charcoal)]/80">
                  Export-Grade Natural Stone • Rajasthan, India
                </span>
              </div>

              <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl leading-[1.03] tracking-[-0.02em] mb-7 text-[var(--deep-charcoal)]">
                Premium Sandstone,
                <br />
                Built for Lasting Architecture.
              </h1>

              <p className="text-lg md:text-xl text-[var(--warm-grey)] mb-10 max-w-2xl leading-relaxed">
                Consistent color. Precision calibration. Reliable global logistics. Sandstone supply you can specify with
                confidence—at scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('Products')}
                  className="group inline-flex items-center gap-2 rounded-md px-7 py-3.5 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-colors"
                >
                  <span className="text-sm tracking-wide">Explore Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 border border-[var(--deep-charcoal)]/50 text-[var(--deep-charcoal)] hover:bg-[var(--deep-charcoal)] hover:text-white transition-colors">
                  <Download className="w-4 h-4" />
                  <span className="text-sm tracking-wide">Download Catalog</span>
                </button>
              </div>

              <div className="mt-14 flex flex-wrap gap-3">
                {[
                  { k: '50+ Countries', v: 'Export Network' },
                  { k: 'Calibrated', v: 'Thickness Control' },
                  { k: 'Finish Options', v: 'Natural • Honed • Shot-blasted' },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-lg border border-[var(--warm-grey)]/20 bg-white/65 backdrop-blur-sm px-5 py-3"
                  >
                    <div className="text-sm font-semibold text-[var(--deep-charcoal)]">{item.k}</div>
                    <div className="text-xs text-[var(--warm-grey)] mt-0.5">{item.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-xs tracking-[0.18em] uppercase text-[var(--warm-grey)]">
                Scroll to discover products & applications
              </div>
            </div>
          </div>
        }
      >
        <div className="max-w-3xl">
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl leading-[1.05] mb-8 text-white drop-shadow-lg whitespace-nowrap">
            Timeless Stone. Modern Delivery.
          </h2>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('Products')}
              className="group inline-flex items-center gap-2 rounded-md px-7 py-3.5 bg-white text-[var(--deep-charcoal)] hover:bg-[var(--muted-bronze)] hover:text-white transition-colors"
            >
              <span className="text-sm tracking-wide">Explore Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-md px-7 py-3.5 border border-white/60 text-white hover:bg-white hover:text-[var(--deep-charcoal)] transition-colors">
              <Download className="w-4 h-4" />
              <span className="text-sm tracking-wide">Download Catalog</span>
            </button>
          </div>
        </div>
      </MaskContainer>
    </section>
  );
}
