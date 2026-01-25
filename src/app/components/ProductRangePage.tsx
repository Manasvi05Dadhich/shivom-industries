import { ArrowLeft } from 'lucide-react';
import { products, productsInRange } from '@/app/data/products';
import { ProductCard } from './ProductCard';

interface ProductRangePageProps {
  rangeId: string;
  onBack: () => void;
  onSelectProduct: (productId: string) => void;
}

export function ProductRangePage({ rangeId, onBack, onSelectProduct }: ProductRangePageProps) {
  const range = products.find((p) => p.id === rangeId);
  const items = productsInRange[rangeId] ?? [];

  return (
    <section className="min-h-screen bg-[var(--stone-light)] pt-24 pb-16 px-6 sm:px-8">
      <div className="max-w-[1600px] mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[var(--warm-grey)] hover:text-[var(--deep-charcoal)] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Ranges</span>
        </button>

        <div className="mb-10">
          <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl text-[var(--deep-charcoal)]">
            {range?.name ?? 'Products'}
          </h1>
          <p className="mt-2 text-[var(--warm-grey)]">
            {range ? `${range.stoneType} · ${range.colorRange}` : 'Select a product below.'}
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 sm, 3 md, 4 lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewProduct={onSelectProduct}
            />
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-[var(--warm-grey)]">No products in this range yet. Add entries to <code className="text-sm">productsInRange</code> in <code className="text-sm">src/app/data/products.ts</code>.</p>
        )}
      </div>
    </section>
  );
}
