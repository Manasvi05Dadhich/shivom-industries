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


  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProduct]);



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



      {/* RFQ Drawer */}
      <RFQDrawer isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
