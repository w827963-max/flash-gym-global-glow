import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 text-glow">
          {t.cta.title}
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          {t.cta.subtitle}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:shadow-[0_0_40px_hsl(190,100%,50%/0.5)] transition-all animate-pulse-glow"
        >
          {t.cta.button} <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTASection;
