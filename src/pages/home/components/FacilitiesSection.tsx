import ScrollReveal from '@/components/base/ScrollReveal';
import bbq from '@/assets/bbq.jpg';
import bbq2 from '@/assets/bbq2.jpeg';
import bath from '@/assets/bath.jpg';
import kitchen from '@/assets/kitchen.jpg';
import fridge from '@/assets/fridge.jpg';
import table from '@/assets/table.jpg';
import glasses from '@/assets/glasses.jpg';
import wash from '@/assets/wash.jpg';
import wc from '@/assets/wc.jpg';
import ha2 from '@/assets/ha2.png';
import ha22 from '@/assets/2ha.png';

const amenities = [
  {
    id: 'bath',
    title: 'バスルーム・洗面',
    icon: 'ri-drop-line',
    desc: 'バスタブ、給湯、ウォシュレット、シャンプー・ボディソープ類、スキンケア用品、ヘアドライヤー、タオル',
  },
  {
    id: 'kitchen',
    title: 'キッチン・ダイニング',
    icon: 'ri-restaurant-line',
    desc: '冷蔵庫、電子レンジ、コンロ、炊飯器、ケトル、コーヒーメーカー、調理器具類、食器・カトラリー類',
  },
  {
    id: 'laundry',
    title: '洗濯・清掃用品',
    icon: 'ri-t-shirt-line',
    desc: '洗濯機、乾燥機、衣類用乾燥ラック、ハンガー、各種清掃用品',
  },
  {
    id: 'ac',
    title: '空調・冷暖房',
    icon: 'ri-temp-hot-line',
    desc: '冷暖房、エアコン、暖房、ハンディファン',
  },
  {
    id: 'entertainment',
    title: '通信・エンタメ',
    icon: 'ri-wifi-line',
    desc: '無料Wi-Fi、50インチ薄型テレビ（YouTube Netflix視聴可）',
  },
  {
    id: 'kids',
    title: 'お子様向け設備',
    icon: 'ri-bear-smile-line',
    desc: '自立式のベビーチェア、子ども用の食器、子ども向けの本・おもちゃ',
  },
];

const galleryImages = [
  { id: 'bath', image: bath, alt: 'バスルーム' },
  { id: 'kitchen', image: kitchen, alt: 'キッチン' },
  { id: 'fridge', image: fridge, alt: '冷蔵庫' },
  { id: 'table', image: table, alt: 'ダイニングテーブル' },
  { id: 'glasses', image: glasses, alt: 'グラス' },
  { id: 'wash', image: wash, alt: '洗面所' },
  { id: 'wc', image: wc, alt: 'トイレ' },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-20 md:py-28 bg-background-300 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-4 md:px-6">
        
      
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-center gap-4">
          <div className="text-center mb-10 md:mb-14">
          <p className="font-pacifico text-accent-600 text-3xl md:text-4xl">
            Facilities
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-5 mb-3">
            <img
              src={ha2}
              alt=""
              className="w-12 md:w-16 h-auto object-contain"
            />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground-950">
              設備・備品
            </h2>
            <img
              src={ha22}
              alt=""
              className="w-12 md:w-16 h-auto object-contain"
            />
          </div>
          </div>
        </ScrollReveal>

       
        <ScrollReveal delay={150} className="mb-12 md:mb-16">
          <div className="relative bg-white rounded-2xl overflow-hidden border border-background-200 shadow-sm flex flex-col md:flex-row">
            
       
            <div className="relative w-full md:w-1/2 h-[320px] md:h-[420px] bg-background-200">
            
              <img
                src={bbq}
                alt="BBQエリア"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* 重ねる画像 (bbq2.jpeg) */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-2 w-32 h-32 md:w-48 md:h-48 rounded-lg overflow-hidden border-4 border-white shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img
                  src={bbq2}
                  alt="BBQ詳細"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* テキストエリア */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center ">
              <span className="inline-block bg-accent-500/20 text-accent-800 text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 whitespace-nowrap">
                人気設備
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground-950 mb-4">
                BBQセット
              </h3>
              <p className=" text-foreground-600 leading-relaxed font-body">
                アウトドアBBQ。<br />
                BBQセットの貸出無料です。お好みの食材を持ち込むだけで手ぶらで気軽にお楽しみいただけます。野外シャワーもございます。
              </p>
            </div>
            
          </div>
        </ScrollReveal>

        {/* --- アメニティ アイコンカード（6項目） --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          
          {amenities.map((item, idx) => (
            <ScrollReveal key={item.id} delay={200 + idx * 100}>
              <div className="bg-white p-6 rounded-xl border-2 border-dashed border-orange-400 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                  <i className={`${item.icon} text-primary-500 text-2xl`}></i>
                </div>
                <h4 className="font-bold text-foreground-950 mb-3">
                  {item.title}
                </h4>
                <p className="text-sm text-foreground-600 leading-relaxed font-body">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* --- 無限ループ画像スライダー --- */}
      <div className="mt-20 md:mt-28 w-full relative">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="animate-marquee px-2">
          {[...galleryImages, ...galleryImages].map((img, idx) => (
            <div 
              key={`${img.id}-${idx}`} 
              className="w-[220px] md:w-[300px] h-[160px] md:h-[250px] flex-shrink-0 overflow-hidden shadow-sm"
            >
              <img 
                src={img.image}
                alt={img.alt} 
                className="w-full h-full object-cover" 
              />
            </div>
          ))}
        </div>
        <div className="absolute -bottom-6 md:-bottom-9 left-0 right-0 z-10 pointer-events-none leading-[0]">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-[80px] md:h-[120px] block"
            aria-hidden="true"
          >
            <path
              fill="oklch(var(--background-50))"
              d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}