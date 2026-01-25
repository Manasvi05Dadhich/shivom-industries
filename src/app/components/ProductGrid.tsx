import { products } from '@/app/data/products';
import { CardBody, CardContainer, CardItem } from '@/app/components/ui/3d-card';

interface ProductGridProps {
  onSelectRange: (rangeId: string) => void;
}

export function ProductGrid({ onSelectRange }: ProductGridProps) {
  return (
    <section id="products" className="py-32 px-8 md:px-12 lg:px-16 bg-white">
      <div className="max-w-[1800px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-block mb-6 px-5 py-2 border border-[var(--warm-grey)]/20 text-xs tracking-[0.2em] text-[var(--warm-grey)] uppercase bg-[var(--stone-light)]/50">
            Product Range
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl md:text-6xl lg:text-7xl text-[var(--deep-charcoal)] mb-6 leading-tight tracking-tight">
            Natural Sandstone Collection
          </h2>
          <p className="text-lg text-[var(--warm-grey)] max-w-2xl leading-relaxed">
            Explore our range of architectural-grade sandstone, sourced from premium quarries across Rajasthan.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <CardContainer key={product.id} className="inter-var">
              <CardBody className="bg-white relative group/card w-full h-auto rounded-2xl p-0 border border-[var(--warm-grey)]/15 hover:border-[var(--muted-bronze)]/40 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(23,39,64,0.12)] overflow-hidden">
                <CardItem
                  translateZ="100"
                  rotateX={5}
                  rotateZ={-2}
                  className="w-full"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-[var(--stone-light)] relative">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--prussian-blue)]/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                  </div>
                </CardItem>

                {/* Info */}
                <div className="p-8">
                  <CardItem
                    translateZ="50"
                    className="text-xs tracking-[0.15em] text-[var(--warm-grey)] uppercase mb-3 font-medium"
                  >
                    {product.stoneType}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[var(--deep-charcoal)] mb-3 leading-tight group-hover/card:text-[var(--muted-bronze)] transition-colors duration-300"
                  >
                    {product.name}
                  </CardItem>
                  <CardItem
                    translateZ="40"
                    className="text-sm text-[var(--warm-grey)] leading-relaxed mb-6"
                  >
                    {product.colorRange}
                  </CardItem>

                  <div className="mt-6">
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => onSelectRange(product.id)}
                      className="group/btn inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--deep-charcoal)] text-[var(--deep-charcoal)] hover:bg-[var(--deep-charcoal)] hover:text-white transition-all duration-300 text-sm font-medium rounded-lg hover:shadow-lg hover:scale-[1.02]"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}