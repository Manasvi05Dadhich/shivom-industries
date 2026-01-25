import { products } from '@/app/data/products';
import { CardBody, CardContainer, CardItem } from '@/app/components/ui/3d-card';

interface ProductGridProps {
  onSelectRange: (rangeId: string) => void;
}

export function ProductGrid({ onSelectRange }: ProductGridProps) {
  return (
    <section id="products" className="py-24 px-8 bg-white">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block mb-4 px-4 py-1.5 border border-[var(--warm-grey)]/30 text-xs tracking-[0.15em] text-[var(--warm-grey)] uppercase">
            Product Range
          </div>
          <h2 className="font-['Cormorant_Garamond'] text-5xl text-[var(--deep-charcoal)] mb-4">
            Natural Sandstone Collection
          </h2>
          <p className="text-[var(--warm-grey)] max-w-2xl">
            Explore our range of architectural-grade sandstone, sourced from premium quarries across Rajasthan.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <CardContainer key={product.id} className="inter-var">
              <CardBody className="bg-white relative group/card border-black/[0.1] w-full h-auto rounded-none p-0 border border-[var(--warm-grey)]/20 hover:border-[var(--muted-bronze)] transition-all">
                <CardItem
                  translateZ="100"
                  rotateX={5}
                  rotateZ={-2}
                  className="w-full"
                >
                  {/* Image */}
                  <div className="aspect-square overflow-hidden bg-[var(--stone-light)]">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover/card:shadow-xl"
                    />
                  </div>
                </CardItem>

                {/* Info */}
                <div className="p-6">
                  <CardItem
                    translateZ="50"
                    className="text-xs tracking-[0.1em] text-[var(--warm-grey)] uppercase mb-2"
                  >
                    {product.stoneType}
                  </CardItem>
                  <CardItem
                    translateZ="60"
                    className="font-['Cormorant_Garamond'] text-2xl text-[var(--deep-charcoal)] mb-2"
                  >
                    {product.name}
                  </CardItem>
                  <CardItem
                    translateZ="40"
                    className="text-sm text-[var(--warm-grey)]"
                  >
                    {product.colorRange}
                  </CardItem>

                  <div className="mt-4">
                    <CardItem
                      translateZ={20}
                      as="button"
                      onClick={() => onSelectRange(product.id)}
                      className="px-4 py-2 border border-[var(--deep-charcoal)] text-[var(--deep-charcoal)] hover:bg-[var(--deep-charcoal)] hover:text-white transition-colors text-sm"
                    >
                      View Details →
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