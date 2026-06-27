import ScrollReveal from '@/components/base/ScrollReveal';
import background from '@/assets/background.png';
import ha2 from '@/assets/ha2.png';
import ha22 from '@/assets/2ha.png';

export default function ReservationSection() {
  return (
    <section
    id="reservation"
    className="relative -mt-[80px] md:-mt-[120px] pt-[calc(5rem+80px)] md:pt-[calc(7rem+120px)] pb-20 md:pb-28 px-4 md:px-6 overflow-hidden"
  >
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
      style={{ backgroundImage: `url(${background})` }}
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-background-50/60 pointer-events-none" aria-hidden="true" />
    <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none leading-[0]">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[80px] md:h-[120px] block -scale-y-100"
        aria-hidden="true"
      >
        <path
          fill="oklch(var(--background-50))"
          d="M0,64 C360,120 720,0 1080,64 C1260,96 1380,80 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </div>
    <div className="relative z-10 max-w-[720px] mx-auto text-center">
    <p className="font-pacifico text-primary-600 text-3xl md:text-4xl">
            Reservation
          </p>

          <div className="flex items-center justify-center gap-3 md:gap-5 mb-3">
            <img
              src={ha2}
              alt=""
              className="w-12 md:w-16 h-auto object-contain"
            />
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground-950">
              ご予約
            </h2>
            <img
              src={ha22}
              alt=""
              className="w-12 md:w-16 h-auto object-contain"
            />
          </div>

        <ScrollReveal className="text-left bg-background-100 border border-background-200/70 rounded-lg p-6 md:p-8 mb-8 mt-10">

          <p className="font-body text-base md:text-lg text-foreground-700 leading-relaxed text-center mb-8">
            Booking.com、Airbnbにて<br className="md:hidden" />ご予約いただけます。<br />
            ご不明な点がございましたら<br className="md:hidden" />お気軽にお問い合わせください。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="https://www.booking.com/Share-hRPX64"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-accent-700 hover:bg-accent-800 text-background-50 font-bold text-sm px-6 py-3.5 rounded-full border border-background-300/60 transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-arrow-left-line"></i>
              Booking.com
            </a>
            <a
              href="https://www.airbnb.jp/rooms/1155566626188288038?unique_share_id=d7057806-9cd8-4823-9e83-a55af4aa6b8f&viralityEntryPoint=1&s=76"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-background-50 font-bold text-sm px-6 py-3.5 rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap"
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
          className="inline-flex items-center gap-2 text-foreground-950 hover:text-foreground-50 text-sm font-medium transition-colors cursor-pointer"
        >
          <i className="ri-instagram-line text-lg"></i>
          @ocean_villa_oarai
        </a>
      </div>
    </section>
  );
}