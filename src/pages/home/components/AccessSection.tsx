import ScrollReveal from '@/components/base/ScrollReveal';

export default function AccessSection() {
  // 長い名前は <br /> で改行できるようにReact Nodeとして定義
  const touristSpots = [
    { title: "大洗磯前神社", time: "車で約5分" },
    { title: "大洗サンビーチ", time: "車で約5分" },
    { title: <>アクアワールド<br />茨城県大洗水族館</>, time: "車で約10分" },
    { title: <>那珂湊<br />おさかな市場</>, time: "車で約15分" }
  ];

  return (
    <section id="access" className="py-20 md:py-28 px-4 md:px-6 bg-background-100">
      <div className="max-w-[1100px] mx-auto">

        {/* --- アクセス セクション --- */}
        <ScrollReveal>
        <h2 className="text-center font-heading font-bold text-2xl md:text-4xl text-foreground-950 mb-3">
          アクセス
          </h2>
        </ScrollReveal>
        <p className="mt-4 text-foreground-500 text-lg max-w-md mx-auto text-center mb-10">
          〒311-1301 <br />茨城県東茨城郡大洗町磯浜町6902-1
        </p>

        <div className="mb-20">
          {/* Googleマップ */}
          <ScrollReveal delay={150} className="relative rounded-lg overflow-hidden mb-6 h-[300px] md:h-[420px] shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3223.5!2d140.5747!3d36.3156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6021b5e5c0c0c0c0%3A0x0!2zMzYuwrAxOCc1Ni4yIk4gMTQwwrAzNCcyOC45IkU!5e0!3m2!1sja!2sjp!4v1690000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ocean villa 大洗の地図"
              className="absolute inset-0"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent"></div>
          </ScrollReveal>

          {/* アクセス手段カード（2列） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* お車でお越しの方 */}
            <ScrollReveal delay={200} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-black/5">
              <h3 className="text-lg font-bold text-foreground-950 mb-3 flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <i className="ri-car-line text-primary-500 text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                お車でお越しの方
              </h3>
              <p className="text-foreground-700 leading-relaxed">
                北関東自動車道「水戸大洗IC」より<br />車で約15分<br />
                <span className="text-sm text-foreground-500">※東京から約1時間30分〜2時間</span>
              </p>
            </ScrollReveal>

            {/* 電車でお越しの方 */}
            <ScrollReveal delay={300} className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-black/5">
              <h3 className="text-lg font-bold text-foreground-950 mb-3 flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <i className="ri-train-line text-primary-500 text-lg w-5 h-5 flex items-center justify-center"></i>
                </div>
                電車でお越しの方
              </h3>
              <p className="text-foreground-700 leading-relaxed">
                鹿島臨海鉄道大洗鹿島線 大洗駅より<br />
                車で約5分 ／ 徒歩約30分<br />
                <span className="text-sm text-foreground-500">※JR常磐線 水戸駅より乗り換え可</span>
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* --- 周辺観光 セクション --- */}
        <ScrollReveal delay={400}>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground-950 text-center mb-10">
            周辺観光
          </h2>
        </ScrollReveal>

        {/* 周辺観光カード（スマホ2列 / PC4列） */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {touristSpots.map((spot, index) => (
            <ScrollReveal
              key={index}
              delay={500 + index * 100}
              // モバイルでは p-4、PCでは p-6 とし、狭い画面での圧迫感を軽減
              className="bg-white p-4 md:p-6 rounded-lg shadow-sm border border-black/5 flex flex-col justify-center items-center text-center hover:shadow-md transition-shadow duration-300"
            >
              {/* モバイルでは text-sm、PCでは text-base（標準）に */}
              <h4 className="font-bold text-sm md:text-base text-foreground-950 mb-3 leading-snug">
                {spot.title}
              </h4>
              {/* バッジもモバイルに合わせて小さく調整 */}
              <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-background-100 text-foreground-700 text-xs md:text-sm font-medium rounded-full whitespace-nowrap">
                {spot.time}
              </span>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}