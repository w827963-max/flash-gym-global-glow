import { useLanguage } from '@/i18n/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-muted-foreground text-lg">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="p-6 rounded-xl glass">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t.contact.address}</h3>
                  <p className="text-sm text-muted-foreground">Asmalı Mescit, İstiklal Cd. Aznavur Pasajı No:108 kat 4, 34430 Beyoğlu/İstanbul</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.contact.floor}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t.contact.phone}</h3>
                  <a href="tel:+902122495347" className="text-sm text-primary hover:underline">(0212) 249 53 47</a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl glass">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{t.contact.hours}</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{t.contact.hoursValue}</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Flash+Gym/@41.0321,28.9767,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_20px_hsl(190,100%,50%/0.5)] transition-all"
            >
              <MapPin className="w-5 h-5" /> {t.contact.getDirections}
            </a>
          </div>

          <div className="rounded-xl overflow-hidden border border-border h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.1!2d28.9767!3d41.0321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sFlash+Gym!5e0!3m2!1sen!2str!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flash Gym location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
