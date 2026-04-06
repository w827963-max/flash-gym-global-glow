import { useLanguage } from '@/i18n/LanguageContext';
import { Heart, MapPin, Dumbbell, Users } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const AboutSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  const items = [
    { icon: Heart, title: t.about.friendly, desc: t.about.friendlyDesc },
    { icon: MapPin, title: t.about.central, desc: t.about.centralDesc },
    { icon: Dumbbell, title: t.about.equipment, desc: t.about.equipmentDesc },
    { icon: Users, title: t.about.community, desc: t.about.communityDesc },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.about.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.about.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl glass hover:neon-border transition-all duration-500 group ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
