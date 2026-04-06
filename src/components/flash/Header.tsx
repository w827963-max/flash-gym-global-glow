import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Menu, X, Zap } from 'lucide-react';

const Header = () => {
  const { t, lang, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.facilities, href: '#facilities' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <Zap className="w-7 h-7 text-primary transition-all group-hover:drop-shadow-[0_0_8px_hsl(190,100%,50%)]" />
          <span className="text-xl font-heading font-bold text-foreground">Flash <span className="text-primary">Gym</span></span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <a key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-md text-xs font-medium border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-all"
          >
            {lang === 'en' ? '🇹🇷 TR' : '🇬🇧 EN'}
          </button>
          <a href="#contact" className="hidden md:inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:shadow-[0_0_20px_hsl(190,100%,50%/0.5)] transition-all">
            {t.nav.joinNow}
          </a>
          <button className="md:hidden text-foreground" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-primary transition-colors py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center">
              {t.nav.joinNow}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
