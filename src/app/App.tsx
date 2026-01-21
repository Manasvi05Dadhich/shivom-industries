import { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { ProductGrid } from '@/app/components/ProductGrid';
import { ProductDetail } from '@/app/components/ProductDetail';
import { ApplicationsSection } from '@/app/components/ApplicationsSection';
import { ExportSection } from '@/app/components/ExportSection';
import { AboutSection } from '@/app/components/AboutSection';
import { ContactSection } from '@/app/components/ContactSection';
import { Footer } from '@/app/components/Footer';
import { RFQDrawer } from '@/app/components/RFQDrawer';

type Page = 'Home' | 'Products' | 'Applications' | 'Export' | 'About' | 'Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProduct]);

  // Show/hide scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    setSelectedProduct(null);
  };

  const handleSelectProduct = (productId: string) => {
    setSelectedProduct(productId);
    setCurrentPage('Products');
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Page content */}
      {selectedProduct ? (
        <ProductDetail
          productId={selectedProduct}
          onBack={handleBackToProducts}
          onOpenRFQ={() => setIsRFQOpen(true)}
        />
      ) : (
        <>
          {currentPage === 'Home' && (
            <>
              <Hero onNavigate={handleNavigate} />
              <ProductGrid onSelectProduct={handleSelectProduct} />
              <ApplicationsSection />
              <ExportSection />
            </>
          )}

          {currentPage === 'Products' && <ProductGrid onSelectProduct={handleSelectProduct} />}

          {currentPage === 'Applications' && <ApplicationsSection />}

          {currentPage === 'Export' && <ExportSection />}

          {currentPage === 'About' && <AboutSection />}

          {currentPage === 'Contact' && <ContactSection />}
        </>
      )}

      <Footer />

      {/* Sticky RFQ button */}
      <button
        onClick={() => setIsRFQOpen(true)}
        className="fixed bottom-8 right-8 flex items-center gap-2 px-6 py-4 bg-[var(--muted-bronze)] text-white hover:bg-[var(--deep-charcoal)] transition-colors shadow-lg z-40"
      >
        <MessageSquare className="w-5 h-5" />
        <span className="hidden md:inline">Request Quote</span>
      </button>

      {/* Scroll to top button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-12 h-12 flex items-center justify-center bg-white border border-[var(--warm-grey)]/20 hover:border-[var(--muted-bronze)] text-[var(--deep-charcoal)] transition-all z-40"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* RFQ Drawer */}
      <RFQDrawer isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
