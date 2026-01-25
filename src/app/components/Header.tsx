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
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        showHeroStyle ? 'bg-transparent border-white/10 backdrop-blur-sm' : 'bg-[var(--prussian-blue)] border-transparent shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => onNavigate('Home')}
              className={`text-xl font-bold transition-colors ${
                showHeroStyle ? 'text-white hover:text-gray-200' : 'text-white hover:text-gray-200'
              }`}
            >
              Shiv Om Industries
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`px-3 py-2 text-sm font-medium border-b-2 border-transparent transition-colors ${
                  currentPage === item.page
                    ? 'text-[var(--rich-cerulean)] border-[var(--rich-cerulean)]'
                    : 'text-white hover:text-[var(--icy-blue)]'
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
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-transparent backdrop-blur-sm border-t border-white/10">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    setIsMenuOpen(false);
                  }}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                    currentPage === item.page
                      ? 'text-[var(--rich-cerulean)] bg-[var(--stone-light)]'
                      : 'text-[var(--yale-blue)] hover:text-[var(--prussian-blue)] hover:bg-[var(--stone-light)]'
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
