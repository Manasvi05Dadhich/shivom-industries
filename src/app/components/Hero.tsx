import { ArrowRight, Download } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 1024);
  }, []);

  // Subtle cursor light (very restrained)
  useEffect(() => {
    if (!isDesktop) return;

    const moveSpotlight = (e: MouseEvent) => {
      if (!containerRef.current || !spotlightRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      spotlightRef.current.style.transform = `translate(${x - 220}px, ${y - 220}px)`;
    };

    window.addEventListener('mousemove', moveSpotlight);
    return () => window.removeEventListener('mousemove', moveSpotlight);
  }, [isDesktop]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#E9E2D8]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-[900ms] ease-out"
        style={{
          backgroundImage: 'url(/header-bg.jpg)',
          opacity: isHovered ? 1 : 0.85,
          filter: isHovered ? 'blur(1.8px)' : 'blur(0px)',
          transform: isHovered ? 'scale(1.035)' : 'scale(1)',
        }}
      />

      {/* GRADIENT OVERLAY (EDITORIAL, NOT FLAT) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20" />

      {/* CURSOR LIGHT */}
      {isDesktop && (
        <div
          ref={spotlightRef}
          className="pointer-events-none absolute h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.18),transparent_65%)] blur-2xl transition-opacity duration-500"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      )}

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">
        <div className="max-w-3xl text-white">
          {/* EYEBROW */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D6B77C]" />
            <span className="text-xs uppercase tracking-[0.18em] text-white/85">
              Export-Grade Natural Stone · Rajasthan
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="font-['Playfair_Display'] text-[clamp(3.5rem,6vw,7rem)] leading-[0.95] tracking-tight">
            Premium Sandstone,
            <br />
            <span className="text-[#F4EFE7] drop-shadow-[0_3px_14px_rgba(0,0,0,0.5)]">
              Designed for Architecture.
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="mt-8 max-w-xl text-lg text-white/80 leading-relaxed">
            Consistent color. Precision calibration. Reliable global logistics.
            Trusted by architects and builders worldwide.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('Products')}
              className="group inline-flex items-center gap-2 rounded-md bg-[#F4EFE7] px-8 py-3.5 text-sm font-medium text-[#2B2B2B] transition-all hover:bg-[#D6B77C] hover:text-black"
            >
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-md border border-white/60 px-8 py-3.5 text-sm text-white transition-all hover:bg-white hover:text-[#2B2B2B]">
              <Download className="h-4 w-4" />
              Download Catalog
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
