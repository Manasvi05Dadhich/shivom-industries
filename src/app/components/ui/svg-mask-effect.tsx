"use client";
import type { ReactNode } from 'react';
import { cn } from './utils';

interface MaskContainerProps {
  /** Text/content shown by default (before hover) */
  revealText: ReactNode;
  /** Optional additional classes for the outer wrapper */
  className?: string;
  /** Content shown over the image when revealed (children) */
  children?: ReactNode;
  /** Background image URL */
  backgroundImage?: string;
}

/**
 * SVG mask hover-reveal effect:
 * - Shows `revealText` by default
 * - On hover, reveals background image with overlay content using SVG mask animation
 */
export function MaskContainer({
  revealText,
  className,
  children,
  backgroundImage = "/header-bg.jpg",
}: MaskContainerProps) {
  return (
    <div
      className={cn(
        'group relative flex items-center justify-start overflow-hidden',
        className,
      )}
    >
      {/* Default (non-hover) unique background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-700 group-hover:opacity-0"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)',
          transform: 'scale(1.08)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-[var(--stone-beige)]/85 transition-opacity duration-700 group-hover:opacity-0" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10 transition-opacity duration-700 group-hover:opacity-0" />

      {/* Default content (visible until hover) */}
      <div className="relative z-10 w-full transition-opacity duration-700 group-hover:opacity-0">
        {revealText}
      </div>

      {/* Background image layer with SVG mask reveal */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Slight blur + dark overlay for readability */}
        <div className="pointer-events-none absolute inset-0 bg-black/35 backdrop-blur-[2px]" />
        {/* Extra gradient near bottom so text can "flow" without a box */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/55 to-transparent" />
        
        {/* SVG mask effect - text reveals the image */}
        <svg className="pointer-events-none absolute inset-0 h-full w-full">
          <defs>
            <mask id="mask-reveal">
              <rect width="100%" height="100%" fill="black" />
              {typeof children === 'string' ? (
                <text
                  x="32"
                  y="48%"
                  dominantBaseline="middle"
                  className="fill-white"
                  style={{
                    fontSize: 'clamp(2.5rem, 9vw, 7rem)',
                    fontFamily: 'var(--font-heading, "Cormorant Garamond", serif)',
                    fontWeight: 'bold',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {children}
                </text>
              ) : (
                <text
                  x="32"
                  y="50%"
                  dominantBaseline="middle"
                  className="fill-white"
                  style={{
                    fontSize: 'clamp(2.5rem, 9vw, 7rem)',
                    fontFamily: 'var(--font-heading, "Cormorant Garamond", serif)',
                    fontWeight: 'bold',
                    letterSpacing: '-0.02em',
                  }}
                >
                  NATURAL STONE
                </text>
              )}
            </mask>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="white"
            mask="url(#mask-reveal)"
            className="transition-all duration-700"
          />
        </svg>

        {/* Overlay content */}
        <div className="absolute inset-0 flex justify-start px-8 pointer-events-auto" style={{ top: 'calc(50% + 1rem)' }}>
          <div className="max-w-3xl text-left text-white relative z-10">
            {children && typeof children !== 'string' && (
              <div
                className="text-xl leading-relaxed"
                style={{
                  textShadow:
                    '0 2px 10px rgba(0,0,0,0.55), 0 1px 2px rgba(0,0,0,0.35)',
                }}
              >
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


