import { useLanguage } from '@/i18n/LanguageContext';
import { Instagram, Facebook, Zap } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            <span className="font-heading font-bold text-foreground">Flash <span className="text-primary">Gym</span></span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">{t.footer.followUs}:</span>
            <a
              href="https://www.instagram.com/taksimflashgym/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/FlasyGYM/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-muted-foreground">{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
