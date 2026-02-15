import { useState } from 'react';
import { ChevronDown, Box } from 'lucide-react';

const blocksWeOffer = [
  { name: 'Dholpur Beige Blocks', grades: 'Commercial & Premium', sizes: 'Small to large blocks', use: 'Tiles, slabs, carving' },
  { name: 'Kota Grey / Blue-Grey Blocks', grades: 'Select & Standard', sizes: 'Calibrated block sizes', use: 'Paving, steps, cladding' },
  { name: 'Agra Red / Pink Sandstone Blocks', grades: 'Architectural grade', sizes: 'Various dimensions', use: 'Heritage, facades, flooring' },
  { name: 'Jaisalmer Yellow / Golden Blocks', grades: 'Premium', sizes: 'Block & slab sizes', use: 'Interior, feature walls' },
  { name: 'Rainbow / Multi-color Sandstone Blocks', grades: 'Natural blend', sizes: 'As per quarry yield', use: 'Landscape, paving, cobbles' },
];

export function ApplicationsSection() {
  const [showBlocks, setShowBlocks] = useState(false);

  return (
    <section className="py-32 px-8 md:px-12 lg:px-16 bg-[var(--stone-light)]/30">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="inline-block mb-6 px-5 py-2 border border-[var(--warm-grey)]/20 text-xs tracking-[0.2em] text-[var(--warm-grey)] uppercase bg-white/80">
          Blocks we offer
        </div>
        <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl text-[var(--deep-charcoal)] mb-8 leading-tight tracking-tight">
          From the quarry to your project
        </h2>

        <div className="space-y-6 text-lg text-[var(--warm-grey)] leading-relaxed text-left md:text-center">
          <p>
            We source raw sandstone blocks directly from Rajasthan’s quarries. Each block is selected for color consistency, 
            grain structure, and suitability for cutting into tiles, slabs, cobbles, and custom pieces. Whether you need 
            commercial volumes or premium architectural grade, we supply blocks that meet exact specifications.
          </p>
          <p>
            Tell us your project requirements—finish, size, and quantity—and we’ll match you with the right block types 
            and grades from our network of quarries.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <button
            type="button"
            onClick={() => setShowBlocks((v) => !v)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--yale-blue)] hover:bg-[var(--deep-charcoal)] text-white font-medium rounded-lg shadow-[0_8px_24px_rgba(23,39,64,0.25)] hover:shadow-[0_12px_32px_rgba(23,39,64,0.35)] transition-all duration-300"
            aria-expanded={showBlocks}
          >
            <Box className="w-5 h-5" />
            {showBlocks ? 'Hide blocks we offer' : 'What blocks do we offer?'}
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${showBlocks ? 'rotate-180' : ''}`}
            />
          </button>

          {showBlocks && (
            <div className="mt-10 w-full max-w-2xl mx-auto text-left overflow-hidden transition-all duration-300 opacity-100">
              <ul className="space-y-4">
                {blocksWeOffer.map((block) => (
                  <li
                    key={block.name}
                    className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-4 rounded-xl bg-white border border-[var(--warm-grey)]/15 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                  >
                    <span className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] font-semibold shrink-0">
                      {block.name}
                    </span>
                    <span className="text-[var(--warm-grey)] text-sm sm:border-l sm:border-[var(--warm-grey)]/30 sm:pl-6">
                      Grades: {block.grades} · Sizes: {block.sizes} · Use: {block.use}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
