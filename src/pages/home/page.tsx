import Navbar from '@/components/feature/Navbar';
import HeroSection from './components/HeroSection';
import ConceptSection from './components/ConceptSection';
import RoomsSection from './components/RoomsSection';
import FacilitiesSection from './components/FacilitiesSection';
import AccessSection from './components/AccessSection';
import ReservationSection from './components/ReservationSection';
import FooterSection from './components/FooterSection';
import StructuredData from './components/StructuredData';
import back from '@/assets/back.png';

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Navbar />
      <HeroSection />
      <ConceptSection />
      <div className="relative isolate -mt-[80px] md:-mt-[120px]">
  <div className="absolute inset-0 bg-background-300 pointer-events-none" aria-hidden="true" />
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none"
    style={{ backgroundImage: `url(${back})` }}
    aria-hidden="true"
  />
  <RoomsSection />
  <FacilitiesSection />
</div>
      <AccessSection />
      <ReservationSection />
      <FooterSection />
    </main>
  );
}