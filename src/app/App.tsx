import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/ui/hero-section-2';
import { ProductGrid } from '@/app/components/ProductGrid';
import { ProductRangePage } from '@/app/components/ProductRangePage';
import { ProductInRangeDetail } from '@/app/components/ProductInRangeDetail';
import { ApplicationsSection } from '@/app/components/ApplicationsSection';
import { ExportSection } from '@/app/components/ExportSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import { RFQDrawer } from '@/app/components/RFQDrawer';

type Page = 'Home' | 'Products' | 'Applications' | 'Export' | 'About' | 'Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [selectedRangeId, setSelectedRangeId] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isRFQOpen, setIsRFQOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedRangeId, selectedProductId]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedRangeId(null);
    setSelectedProductId(null);
  };

  const handleSelectRange = (rangeId: string) => {
    setSelectedRangeId(rangeId);
    setCurrentPage('Products');
  };

  const handleBackFromRange = () => {
    setSelectedRangeId(null);
    setSelectedProductId(null);
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page content */}
      {selectedRangeId && selectedProductId ? (
        <ProductInRangeDetail
          rangeId={selectedRangeId}
          productId={selectedProductId}
          onBack={() => setSelectedProductId(null)}
          onOpenRFQ={() => setIsRFQOpen(true)}
        />
      ) : selectedRangeId ? (
        <ProductRangePage
          rangeId={selectedRangeId}
          onBack={handleBackFromRange}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />
      ) : (
        <>
          {currentPage === 'Home' && (
            <>
              <HeroSection
                slogan="EXPORT-GRADE NATURAL STONE · RAJASTHAN"
                title={
                  <>
                    Premium Sandstone
                    <br />
                    <span className="text-primary">for Contemporary Architecture</span>
                  </>
                }
                subtitle="Discover our range of architectural-grade sandstone sourced from Rajasthan. Trusted by architects and contractors worldwide."
                callToAction={{ text: 'EXPLORE PRODUCTS', href: '#products' }}
                backgroundImage="/gemini.png"
                contactInfo={{
                  website: 'shivomindustries.com',
                  phone: '+91 9928764042',
                  address: 'Bhilwara, Rajasthan, India',
                }}
              />
              <ProductGrid onSelectRange={handleSelectRange} />
              <ApplicationsSection />
              <ExportSection />
            </>
          )}

          {currentPage === 'Products' && <ProductGrid onSelectRange={handleSelectRange} />}

          {currentPage === 'Applications' && <ApplicationsSection />}

          {currentPage === 'Export' && <ExportSection />}

          {currentPage === 'About' && <AboutSection />}

          {currentPage === 'Contact' && <ContactSection />}
        </>
      )}

      <Footer />

      <button
        onClick={() => setIsRFQOpen(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-4 bg-[var(--muted-bronze)] text-white hover:bg-[var(--deep-charcoal)] transition-colors shadow-lg z-40"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden md:inline">Request Quote</span>
      </button>

      <RFQDrawer isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
