import { useLanguage } from '@/i18n/LanguageContext';
import { Dumbbell, Heart, Weight, Flame, SmilePlus } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const FacilitiesSection = () => {
  const { t } = useLanguage();
  const { ref, inView } = useInView();

  const facilities = [
    { icon: Dumbbell, title: t.facilities.strength, desc: t.facilities.strengthDesc },
    { icon: Heart, title: t.facilities.cardio, desc: t.facilities.cardioDesc },
    { icon: Weight, title: t.facilities.freeWeights, desc: t.facilities.freeWeightsDesc },
    { icon: Flame, title: t.facilities.functional, desc: t.facilities.functionalDesc },
    { icon: SmilePlus, title: t.facilities.staff, desc: t.facilities.staffDesc },
  ];

  return (
    <section id="facilities" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.facilities.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t.facilities.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {facilities.map((f, i) => (
            <div
              key={i}
              className={`group p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-[0_0_20px_hsl(190,100%,50%/0.15)] transition-all duration-300 text-center ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
