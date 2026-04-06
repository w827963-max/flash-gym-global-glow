import { useLanguage } from '@/i18n/LanguageContext';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
const alts = ['Strength area', 'Cardio zone', 'Free weights', 'Functional training', 'Workout', 'Stretching area'];

const GallerySection = () => {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.gallery.title}</h2>
          <p className="text-muted-foreground text-lg">{t.gallery.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden group aspect-square">
              <img
                src={src}
                alt={alts[i]}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
