import { ArrowRight } from 'lucide-react';
import type { ProductInRange } from '@/app/data/products';

interface ProductCardProps {
  product: ProductInRange;
  onViewProduct: (id: string) => void;
}

export function ProductCard({ product, onViewProduct }: ProductCardProps) {
  return (
    <article className="h-full flex flex-col bg-white rounded-2xl border border-[var(--warm-grey)]/15 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(23,39,64,0.12)] hover:border-[var(--muted-bronze)]/40 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group">
      <div className="relative aspect-square overflow-hidden bg-[var(--stone-light)]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--prussian-blue)]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-[var(--deep-charcoal)] mb-4 group-hover:text-[var(--muted-bronze)] transition-colors duration-300 leading-tight">
          {product.name}
        </h3>
        <div className="mt-auto pt-4">
          <button
            onClick={() => onViewProduct(product.id)}
            className="group/btn inline-flex items-center gap-2 text-sm font-medium text-[var(--deep-charcoal)] hover:text-[var(--muted-bronze)] transition-all duration-300"
          >
            <span className="relative">
              View Product
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--muted-bronze)] transition-all duration-300 group-hover/btn:w-full"></span>
            </span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}
