import Navbar from '@/components/feature/Navbar';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import RoomsSection from './components/RoomsSection';
import FacilitiesSection from './components/FacilitiesSection';
import AccessSection from './components/AccessSection';
import ReservationSection from './components/ReservationSection';
import FooterSection from './components/FooterSection';
import StructuredData from './components/StructuredData';

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <RoomsSection />
      <FacilitiesSection />
      <AccessSection />
      <ReservationSection />
      <FooterSection />
    </main>
  );
}