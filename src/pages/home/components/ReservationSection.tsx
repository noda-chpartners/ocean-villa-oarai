import ScrollReveal from '@/components/base/ScrollReveal';

export default function ReservationSection() {
  return (
    <section id="reservation" className="py-20 md:py-28 px-4 md:px-6">
      <div className="max-w-[720px] mx-auto text-center">
        <p className="font-serif italic text-accent-600 text-sm md:text-base mb-4 font-heading">
          — Reservation —
        </p>
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground-950 mb-10">
          ご予約
        </h2>

        <ScrollReveal className="text-left bg-background-100 border border-background-200/70 rounded-lg p-6 md:p-8 mb-8">

          <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed text-center mb-8">
            Booking.com、Airbnbにて<br className="md:hidden"/>ご予約いただけます。<br />
            ご不明な点がございましたら<br className="md:hidden"/>お気軽にお問い合わせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://www.booking.com/Share-hRPX64"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-foreground-950 hover:bg-foreground-800 text-background-50 font-bold text-sm px-6 py-3.5 rounded-full border border-background-300/60 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line"></i>
              Booking.com
            </a>
            <a
              href="https://www.airbnb.jp/rooms/1155566626188288038?unique_share_id=d7057806-9cd8-4823-9e83-a55af4aa6b8f&viralityEntryPoint=1&s=76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-foreground-950 hover:bg-foreground-800 text-background-50 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              Airbnb
              <i className="ri-arrow-right-line"></i>
            </a>
          </div>

          {/* 電話番号（大きく・中央配置） */}
          <div className="flex flex-col items-center justify-center bg-background-50 border border-background-200/70 rounded-lg p-8 mb-8 text-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 mb-4">
              <i className="ri-phone-line text-2xl"></i>
            </div>
            <a
              href="tel:09025556998"
              className="text-2xl md:text-3xl font-bold text-foreground-950 hover:text-primary-500 transition-colors cursor-pointer tracking-wider"
            >
              090-2555-6998
            </a>
            <p className="text-sm text-foreground-500 mt-3">受付時間 10:00〜20:00</p>
          </div>

          {/* 追加：チェックイン・チェックアウト・定員 情報（シンプル配置） */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 text-center">
            <div className="flex flex-col">
              <span className="text-xs text-foreground-500 mb-1">チェックイン</span>
              <span className="font-bold text-foreground-950 text-base">15:00</span>
            </div>
            
            {/* PC表示用の区切り線（スマホでは非表示） */}
            <div className="hidden sm:block w-px h-8 bg-background-300/70"></div>
            
            <div className="flex flex-col">
              <span className="text-xs text-foreground-500 mb-1">チェックアウト</span>
              <span className="font-bold text-foreground-950 text-base">10:00</span>
            </div>
            
            <div className="hidden sm:block w-px h-8 bg-background-300/70"></div>
            
            <div className="flex flex-col">
              <span className="text-xs text-foreground-500 mb-1">定員</span>
              <span className="font-bold text-foreground-950 text-base">10名まで</span>
            </div>
          </div>

        </ScrollReveal>

        <a
          href="https://www.instagram.com/ocean_villa_oarai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-foreground-500 hover:text-foreground-950 text-sm font-medium transition-colors cursor-pointer"
        >
          <i className="ri-instagram-line text-lg"></i>
          @ocean_villa_oarai
        </a>
      </div>
    </section>
  );
}