import { useLanguage } from '@/i18n/LanguageContext';
import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const ReviewsSection = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);

  const reviews = [
    { name: 'Will Cai', stars: 5, text: t.reviews.review1 },
    { name: 'Adam Williams', stars: 5, text: t.reviews.review2 },
    { name: 'Bkdrft', stars: 5, text: t.reviews.review3 },
  ];

  useEffect(() => {
    const interval = setInterval(() => setActive(prev => (prev + 1) % reviews.length), 5000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section id="reviews" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.reviews.title}</h2>
          <p className="text-muted-foreground text-lg mb-6">{t.reviews.subtitle}</p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass">
            <div className="flex">
              {[1, 2, 3, 4].map(i => <Star key={i} className="w-5 h-5 fill-neon-yellow text-neon-yellow" />)}
              <Star className="w-5 h-5 fill-neon-yellow/50 text-neon-yellow" />
            </div>
            <span className="text-foreground font-semibold">4.5</span>
            <span className="text-muted-foreground text-sm">({t.reviews.reviewCount})</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl glass transition-all duration-500 ${i === active ? 'neon-border scale-105' : 'hover:neon-border'}`}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">{review.name}</p>
                  <div className="flex">
                    {Array.from({ length: review.stars }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-neon-yellow text-neon-yellow" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${i === active ? 'bg-primary w-8' : 'bg-muted-foreground/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
