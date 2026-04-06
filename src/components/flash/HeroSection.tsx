import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, ArrowRight, Star, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-gym.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Flash Gym interior" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
              <Users className="w-3.5 h-3.5" /> {t.badges.happyMembers}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-neon-yellow">
              <Star className="w-3.5 h-3.5" /> {t.badges.ratedGym}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-xs font-medium text-neon-red">
              <Award className="w-3.5 h-3.5" /> {t.badges.primeLocation}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground leading-tight mb-6 text-glow">
            {t.hero.headline}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl">
            {t.hero.subheadline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:shadow-[0_0_30px_hsl(190,100%,50%/0.5)] transition-all animate-pulse-glow">
              {t.hero.joinNow} <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://www.google.com/maps/place/Flash+Gym/@41.0321,28.9767,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-lg hover:border-primary hover:text-primary transition-all"
            >
              <MapPin className="w-5 h-5" /> {t.hero.getDirections}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
