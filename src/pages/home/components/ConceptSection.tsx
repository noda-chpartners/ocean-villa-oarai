import ScrollReveal from '@/components/base/ScrollReveal';
import mugi from '@/assets/mugi.png';
import parasol from '@/assets/parasol.png';

export default function ConceptSection() {
  return (
    <section id="concept" className="py-20 md:py-28 px-4 md:px-6 relative overflow-hidden bg-background-50 ">
      
      {/* Background Images (Tailwind CSS only) */}
      <img 
        src={mugi} 
        alt="Mugi" 
        className="absolute md:top-12 md:left-36 top-10 left-8 w-1/5 opacity-80 md:w-[13%] md:opacity-90 -rotate-[30deg] pointer-events-none" 
      />
      <img 
        src={parasol} 
        alt="Parasol" 
        className="absolute bottom-20 md:bottom-40 right-5 md:right-20 w-1/5 opacity-80 md:w-[13%] md:opacity-80 pointer-events-none" 
      />

      <ScrollReveal className="max-w-[720px] mx-auto text-center relative z-10 ">
        <p className="font-pacifico text-accent-600 text-5xl md:text-7xl mb-6 origin-center inline-block ">
          About Us
        </p>
        <p className="font-body text-base md:text-xl text-foreground-800 leading-relaxed md:leading-loose mb-20">
          大洗町にある「Ocean villa大洗」は、
          <br className="hidden md:block" />
          観光地へのアクセスも良好な貸切別荘です。
          <br />
          グループやご家族でも、日常を離れて
          <br className="hidden md:block" />
          ゆったりとお過ごしいただけます。

        </p>
      </ScrollReveal>
    </section>
  );
}