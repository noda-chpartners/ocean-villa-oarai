import ScrollReveal from '@/components/base/ScrollReveal';

export default function ConceptSection() {
  return (
    <section id="concept" className="py-20 md:py-28 px-4 md:px-6">
      <ScrollReveal className="max-w-[720px] mx-auto text-center">
        <p className="font-body text-lg md:text-2xl text-foreground-800 leading-relaxed md:leading-loose">
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