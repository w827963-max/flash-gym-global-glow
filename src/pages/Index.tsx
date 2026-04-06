import Header from '@/components/flash/Header';
import HeroSection from '@/components/flash/HeroSection';
import AboutSection from '@/components/flash/AboutSection';
import FacilitiesSection from '@/components/flash/FacilitiesSection';
import ReviewsSection from '@/components/flash/ReviewsSection';
import GallerySection from '@/components/flash/GallerySection';
import ContactSection from '@/components/flash/ContactSection';
import CTASection from '@/components/flash/CTASection';
import Footer from '@/components/flash/Footer';
import FloatingJoinButton from '@/components/flash/FloatingJoinButton';

const Index = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <FacilitiesSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
      <CTASection />
      <Footer />
      <FloatingJoinButton />
    </main>
  );
};

export default Index;
