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
import GallerySection from '@/app/components/GallerySection';

type Page = 'Home' | 'Products' | 'Applications' | 'Export' | 'About' | 'Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [selectedRangeId, setSelectedRangeId] = useState<string | null>(null);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  const [showRequestButton, setShowRequestButton] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedRangeId, selectedProductId]);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer');
      if (footer) {
        const footerTop = footer.offsetTop;
        const footerHeight = footer.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        // Hide button when footer is visible (within 100px of footer)
        setShowRequestButton(scrollPosition < footerTop + 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
                downloadCatalog={{ text: 'Download Catalog', href: '/catalog.pdf' }}
                backgroundImage="/gemini.png"
                contactInfo={{
                  mapsLocation: 'https://www.google.com/maps/search/?api=1&query=SHIV+OM+INDUSTRIES+F-7+A+opposite+BSNL+OFFICE+RIICO+Bigod+Rajasthan+311604',
                  phone: '+91 9928764042',
                  address: 'Bhilwara, Rajasthan, India',
                }}
              />
              <ProductGrid onSelectRange={handleSelectRange} />
              <GallerySection />
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

      {showRequestButton && (
        <a
          href="https://wa.me/919928764042?text=Hi%2C%20I%27m%20interested%20in%20your%20natural%20stone%20products.%20Could%20you%20share%20details%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="group fixed bottom-8 right-8 flex items-center gap-3 px-8 py-5 bg-[var(--muted-bronze)] text-white hover:bg-[var(--deep-charcoal)] transition-all duration-300 shadow-[0_8px_24px_rgba(63,116,162,0.3)] hover:shadow-[0_12px_32px_rgba(23,39,64,0.4)] rounded-lg z-40 hover:scale-105 font-medium"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden md:inline">WhatsApp Us</span>
        </a>
      )}

      <RFQDrawer isOpen={isRFQOpen} onClose={() => setIsRFQOpen(false)} />
    </div>
  );
}
