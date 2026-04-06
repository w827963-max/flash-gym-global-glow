import { useLanguage } from '@/i18n/LanguageContext';
import { Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingJoinButton = () => {
  const { t } = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg animate-pulse-glow transition-all hover:scale-105 md:hidden"
    >
      <Zap className="w-4 h-4" /> {t.nav.joinNow}
    </a>
  );
};

export default FloatingJoinButton;
