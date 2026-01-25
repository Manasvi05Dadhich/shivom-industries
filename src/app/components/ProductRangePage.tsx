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
    <section className="min-h-screen bg-[var(--stone-light)] pt-28 pb-20 px-8 md:px-12 lg:px-16">
      <div className="max-w-[1800px] mx-auto">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-[var(--warm-grey)] hover:text-[var(--deep-charcoal)] mb-12 transition-all duration-300"
        >
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-medium">Back to Product Ranges</span>
        </button>

        <div className="mb-16">
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl text-[var(--deep-charcoal)] mb-4 leading-tight tracking-tight">
            {range?.name ?? 'Products'}
          </h1>
          <p className="text-lg text-[var(--warm-grey)] leading-relaxed">
            {range ? `${range.stoneType} · ${range.colorRange}` : 'Select a product below.'}
          </p>
        </div>

        {/* Grid: 1 col mobile, 2 sm, 3 md, 4 lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-10">
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
