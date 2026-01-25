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
    <section className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[var(--warm-grey)] hover:text-[var(--deep-charcoal)] mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="aspect-square bg-[var(--stone-light)] overflow-hidden border border-[var(--warm-grey)]/20">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl text-[var(--deep-charcoal)] mb-4">
              {product.name}
            </h1>
            <p className="text-[var(--warm-grey)] mb-8">
              Add a description and extra fields in the data when you have them.
            </p>
            <button
              onClick={onOpenRFQ}
              className="w-full sm:w-auto px-8 py-4 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-colors"
            >
              Request For Quotation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
