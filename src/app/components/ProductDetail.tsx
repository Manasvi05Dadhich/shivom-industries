import { ArrowLeft, Download, FileText } from 'lucide-react';
import { products } from '@/app/data/products';
import { useState } from 'react';

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
  onOpenRFQ: () => void;
}

export function ProductDetail({ productId, onBack, onOpenRFQ }: ProductDetailProps) {
  const product = products.find((p) => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return null;
  }

  // For demo, using the same image. In production, would have multiple images
  const images = [product.imageUrl, product.imageUrl, product.imageUrl];

  return (
    <section className="min-h-screen bg-white pt-20">
      <div className="max-w-[1600px] mx-auto px-8 py-12">
        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-[var(--warm-grey)] hover:text-[var(--deep-charcoal)] mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-square bg-[var(--stone-light)] overflow-hidden border border-[var(--warm-grey)]/20">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail navigation */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-square border overflow-hidden ${
                    selectedImage === idx
                      ? 'border-[var(--muted-bronze)]'
                      : 'border-[var(--warm-grey)]/20 hover:border-[var(--warm-grey)]'
                  } transition-colors`}
                >
                  <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="text-xs tracking-[0.15em] text-[var(--warm-grey)] uppercase mb-2">
                {product.stoneType}
              </div>
              <h1 className="font-['Cormorant_Garamond'] text-5xl text-[var(--deep-charcoal)] mb-4">
                {product.name}
              </h1>
              <p className="text-[var(--warm-grey)] leading-relaxed">{product.description}</p>
            </div>

            {/* Specifications Table */}
            <div className="border border-[var(--warm-grey)]/20">
              <div className="bg-[var(--stone-light)] px-6 py-3 border-b border-[var(--warm-grey)]/20">
                <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)]">
                  Technical Specifications
                </h3>
              </div>
              <div className="divide-y divide-[var(--warm-grey)]/20">
                <SpecRow label="Stone Type" value={product.stoneType} />
                <SpecRow label="Color Range" value={product.colorRange} />
                <SpecRow label="Finish Options" value={product.finishOptions.join(', ')} />
                <SpecRow label="Standard Sizes" value={product.standardSizes.join(', ')} />
                <SpecRow label="Thickness" value={product.thickness.join(', ')} />
                <SpecRow label="Edge Finish" value={product.edgeFinish.join(', ')} />
                <SpecRow label="Applications" value={product.applications.join(', ')} />
                <SpecRow label="Origin" value={product.origin} />
              </div>
            </div>

            {/* Applications */}
            <div>
              <h3 className="font-['Cormorant_Garamond'] text-xl text-[var(--deep-charcoal)] mb-4">
                Recommended Applications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {product.applications.map((app) => (
                  <div
                    key={app}
                    className="px-4 py-3 border border-[var(--warm-grey)]/20 text-sm text-[var(--deep-charcoal)]"
                  >
                    {app}
                  </div>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-[var(--stone-light)] p-6 space-y-3">
              <h4 className="font-['Cormorant_Garamond'] text-lg text-[var(--deep-charcoal)] mb-3">
                Technical Documentation
              </h4>
              <button className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[var(--warm-grey)]/20 hover:border-[var(--muted-bronze)] text-[var(--deep-charcoal)] transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[var(--muted-bronze)]" />
                  <span className="text-sm">Product Specification Sheet</span>
                </div>
                <Download className="w-4 h-4" />
              </button>
              <button className="w-full flex items-center justify-between px-4 py-3 bg-white border border-[var(--warm-grey)]/20 hover:border-[var(--muted-bronze)] text-[var(--deep-charcoal)] transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[var(--muted-bronze)]" />
                  <span className="text-sm">Installation Guidelines</span>
                </div>
                <Download className="w-4 h-4" />
              </button>
            </div>

            {/* CTA */}
            <button
              onClick={onOpenRFQ}
              className="w-full px-6 py-4 bg-[var(--deep-charcoal)] text-white hover:bg-[var(--muted-bronze)] transition-colors"
            >
              Request For Quotation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-5 px-6 py-4">
      <div className="col-span-2 text-sm text-[var(--warm-grey)]">{label}</div>
      <div className="col-span-3 text-sm text-[var(--deep-charcoal)]">{value}</div>
    </div>
  );
}
