import { HeaderNav } from './components/marketing/HeaderNav';
import { HeroSection, AboutSection, ServicesSection } from './components/marketing/Sections';
import { ContactSection } from './components/marketing/ContactSection';
import { Footer } from './components/marketing/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderNav />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
