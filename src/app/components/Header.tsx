import { useEffect, useState } from 'react';

type Page = 'Home' | 'Products' | 'Applications' | 'Export' | 'About' | 'Contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY < 80);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isHome = currentPage === 'Home';
  const showHeroStyle = false;

  const navItems = [
    { label: 'Home', page: 'Home' },
    { label: 'Products', page: 'Products' },
    { label: 'Applications', page: 'Applications' },
    { label: 'Export', page: 'Export' },
    { label: 'About', page: 'About' },
    { label: 'Contact', page: 'Contact' },
  ];

  // On the Home page, hide the header once we scroll past the hero
  if (isHome && !isAtTop) {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
        showHeroStyle ? 'bg-transparent border-white/10 backdrop-blur-md' : 'bg-[var(--prussian-blue)] border-transparent shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('Home')}
              className="text-xl md:text-2xl font-bold text-white hover:text-[var(--icy-blue)] transition-colors duration-300 tracking-tight"
            >
              Shiv Om Industries
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`relative px-4 py-2 text-sm font-medium border-b-2 border-transparent transition-all duration-300 ${
                  currentPage === item.page
                    ? 'text-[var(--rich-cerulean)] border-[var(--rich-cerulean)]'
                    : 'text-white/90 hover:text-white hover:border-white/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-colors ${
                'text-white hover:text-gray-200'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-[var(--prussian-blue)]/98 backdrop-blur-md border-t border-white/10 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-4 py-3 text-base font-medium w-full text-left rounded-lg transition-all duration-300 ${
                    currentPage === item.page
                      ? 'text-[var(--rich-cerulean)] bg-white/10'
                      : 'text-white/90 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
