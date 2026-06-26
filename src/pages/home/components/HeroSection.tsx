import ScrollReveal from '@/components/base/ScrollReveal';
import logo from '@/assets/hero-w.png';
import hero from '@/assets/living.png';

export default function HeroSection() {
  const scrollToReservation = () => {
    const el = document.querySelector('#reservation');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[40px]">
       <path
          fill="oklch(var(--background-50))"
          d="M0,0 H1440 V30 
       Q1350,60 1260,30 T1080,30 T900,30 T720,30 T540,30 T360,30 T180,30 T0,30 Z"
        />
      </svg>
      <img
        src={hero}
        alt="大洗の海岸線の景色"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"></div>

      <ScrollReveal className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
        <div className="w-full max-w-[500px] flex flex-col items-center">
          <img src={logo}
            alt="看板写真"
            className="w-full h-auto object-contain mb-0" />



        </div>
      </ScrollReveal>


    </section>
  );
}