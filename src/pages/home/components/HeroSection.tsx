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
      <img
        src="https://readdy.ai/api/search-image?query=Stylized%20artistic%20illustration%20of%20Ibaraki%20Oarai%20coastline%20at%20sunset%2C%20warm%20golden%20and%20coral%20tones%2C%20gentle%20ocean%20waves%2C%20soft%20rolling%20hills%20in%20distance%2C%20minimalist%20Japanese%20beach%20aesthetic%2C%20dreamy%20atmospheric%20light%2C%20wide%20horizontal%20composition%2C%20serene%20coastal%20vibe%2C%20no%20text%20no%20people%2C%20digital%20art%20style%20with%20soft%20gradients%20and%20organic%20textures&width=1800&height=1200&seq=hero-oarai-2026&orientation=landscape"
        alt="大洗の海岸線の景色"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/50"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 md:px-6">
  <div className="w-full max-w-[500px] flex flex-col items-center">
    <img
      src={logo}
      alt="看板写真"
      className="hero-pop-logo w-full h-auto object-contain"
    />
  </div>
  <style>{`
@keyframes heroLogoPop {
  0%   { opacity: 0; transform: scale(0.92) translateY(12px); }
  70%  { opacity: 1; transform: scale(1.02) translateY(-2px); }
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
.hero-pop-logo {
  animation: heroLogoPop 0.65s cubic-bezier(0.22, 1, 0.36, 1) 0.25s both;
}
  `}</style>
</div>

      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none leading-[0]">
  <svg
    viewBox="0 0 1440 80"
    preserveAspectRatio="none"
    className="w-full h-[100px] md:h-[150px] block"
    aria-hidden="true"
  >
    <path
      fill="oklch(var(--background-50))"
      d="M0,40 Q720,100 1440,40 L1440,80 L0,80 Z"
    />
  </svg>
</div>
    </section>
  );
}