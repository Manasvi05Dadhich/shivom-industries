import { useState, useEffect } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Products', 'Applications', 'Export', 'About', 'Contact'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm border-b border-[var(--stone-dark)]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigate('Home')}
            className="font-['Cormorant_Garamond'] text-2xl tracking-wide text-[var(--deep-charcoal)] hover:text-[var(--muted-bronze)] transition-colors"
          >
            Shiv Om Industries
          </button>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item)}
                className={`text-sm tracking-wide transition-colors relative ${
                  currentPage === item
                    ? 'text-[var(--deep-charcoal)]'
                    : 'text-[var(--warm-grey)] hover:text-[var(--deep-charcoal)]'
                }`}
              >
                {item}
                {currentPage === item && (
                  <span className="absolute -bottom-1 left-0 right-0 h-px bg-[var(--muted-bronze)]" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
