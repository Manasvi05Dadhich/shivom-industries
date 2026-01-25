import { ArrowLeft } from 'lucide-react';
import { productsInRange } from '@/app/data/products';

interface ProductInRangeDetailProps {
  rangeId: string;
  productId: string;
  onBack: () => void;
  onOpenRFQ: () => void;
}

export function ProductInRangeDetail({ rangeId, productId, onBack, onOpenRFQ }: ProductInRangeDetailProps) {
  const items = productsInRange[rangeId] ?? [];
  const product = items.find((p) => p.id === productId);

  if (!product) {
    return (
      <section className="min-h-screen bg-white pt-24 pb-16 px-8">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-[var(--warm-grey)]">Product not found.</p>
          <button
            onClick={onBack}
            className="mt-4 flex items-center gap-2 text-[var(--warm-grey)] hover:text-[var(--deep-charcoal)]"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-white pt-28 pb-20">
      <div className="max-w-[1800px] mx-auto px-8 md:px-12 lg:px-16">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-[var(--warm-grey)] hover:text-[var(--deep-charcoal)] mb-12 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium">Back to products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="aspect-square bg-[var(--stone-light)] overflow-hidden border border-[var(--warm-grey)]/15 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl text-[var(--deep-charcoal)] mb-6 leading-tight tracking-tight">
              {product.name}
            </h1>
            <p className="text-lg text-[var(--warm-grey)] mb-10 leading-relaxed">
              Add a description and extra fields in the data when you have them.
            </p>
            <button
              onClick={onOpenRFQ}
              className="group inline-flex items-center gap-3 w-full sm:w-auto px-10 py-5 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] font-medium text-base"
            >
              <span>Request For Quotation</span>
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
