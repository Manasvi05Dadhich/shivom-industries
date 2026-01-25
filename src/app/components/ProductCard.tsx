import { ArrowRight } from 'lucide-react';
import type { ProductInRange } from '@/app/data/products';

interface ProductCardProps {
  product: ProductInRange;
  onViewProduct: (id: string) => void;
}

export function ProductCard({ product, onViewProduct }: ProductCardProps) {
  return (
    <article className="h-full flex flex-col bg-white rounded-2xl border border-[var(--warm-grey)]/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-[var(--muted-bronze)]/50 transition-all duration-300 ease-out group">
      <div className="relative aspect-square overflow-hidden bg-[var(--stone-light)]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] mb-4 group-hover:text-[var(--muted-bronze)] transition-colors">
          {product.name}
        </h3>
        <div className="mt-auto pt-2">
          <button
            onClick={() => onViewProduct(product.id)}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--deep-charcoal)] hover:text-[var(--muted-bronze)] transition-colors"
          >
            View Product
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}
