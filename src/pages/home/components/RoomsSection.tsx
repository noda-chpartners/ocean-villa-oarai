import ScrollReveal from '@/components/base/ScrollReveal';
import living from '@/assets/living.png';
import room1 from '@/assets/room1.jpg';
import room2 from '@/assets/room2.jpg';
import room3 from '@/assets/room3.jpg';
import floorplan from '@/assets/pic.jpg';
import { useState } from 'react';
import ha2 from '@/assets/ha2.png';
import ha22 from '@/assets/2ha.png';

// 間取り図以外の部屋写真を定義
const rooms = [
  {
    id: 'living',
    title: 'Living & Dining',
    desc: 'リビングとダイニングが一体となった空間。ご家族やご友人と団らんの時間をお過ごしください',
    image: living,
    colSpan: 'md:col-span-3', // 上段でいっぱいに広げてメインを強調
    heightClass: 'h-[300px] md:h-[480px]',
  },
  {
    id: 'room1',
    title: '寝室 1',
    desc: 'シングルベッド3台の寝室が二部屋。明るく清潔感のあるベッドルームです。',
    image: room1,
    colSpan: 'md:col-span-1',
    heightClass: 'h-[240px] md:h-[300px]',
  },
  {
    id: 'room2',
    title: '寝室 2',
    desc: 'シングルベッド2台の寝室。ふかふかのベッドでゆっくりお休みください。',
    image: room2,
    colSpan: 'md:col-span-1',
    heightClass: 'h-[240px] md:h-[300px]',
  },
  {
    id: 'room3',
    title: '寝室 3',
    desc: '布団2組。障子からは光が差し込む温かみの感じられる和室のお部屋です。',
    image: room3,
    colSpan: 'md:col-span-1',
    heightClass: 'h-[240px] md:h-[300px]',
  },
];

export default function RoomsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="rooms"
      className="relative -mt-[80px] md:-mt-[120px] pt-[calc(5rem+80px)] md:pt-[calc(7rem+120px)] pb-20 md:pb-28 px-4 md:px-6 overflow-hidden"
    >
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
      <div className="relative z-10 max-w-[1100px] mx-auto">
  <ScrollReveal>
    <div className="text-center mb-10 md:mb-14">
      <p className="font-pacifico text-accent-600 text-3xl md:text-4xl">
        Rooms
      </p>

      <div className="flex items-center justify-center gap-3 md:gap-5 mb-3">
        <img src={ha2} alt="" className="w-12 md:w-16 h-auto object-contain" />
        <h2 className="font-heading font-bold text-2xl md:text-4xl text-foreground-950">
          お部屋
        </h2>
        <img src={ha22} alt="" className="w-12 md:w-16 h-auto object-contain" />
      </div>

      <p className="text-sm text-foreground-800 font-body mb-6">
        家族や友人と気兼ねなく過ごせる広々空間<br />
        特別な時間をお過ごしください。
      </p>
    </div>
  </ScrollReveal>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {rooms.map((room, idx) => (
            <ScrollReveal
              key={room.id}
              delay={idx * 150}
              className={room.colSpan}
            >
              <div className={`group relative overflow-hidden rounded-lg ${room.heightClass}`}>
                <img
                  src={room.image}
                  alt={room.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-1 md:inset-2 border-2 border-dashed border-white/60 rounded pointer-events-none z-10 transition-colors duration-500 group-hover:border-white/90"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>

                <div className="absolute top-3 right-3 md:top-4 md:right-4 pointer-events-none z-20">
                  <span className="inline-block bg-accent-600 text-foreground-50 text-xs font-bold px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                    {room.title}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 pointer-events-none z-20">
                  <p className="text-white/95 text-sm leading-relaxed hidden md:block drop-shadow-md">
                    {room.desc}
                  </p>
                  <p className="text-white/95 text-xs leading-relaxed md:hidden drop-shadow-md">
                    {room.desc.length > 40 ? room.desc.slice(0, 40) + '...' : room.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 間取り図を開くボタン（中央配置） */}
        <ScrollReveal delay={600}>
        <div className="mt-10 md:mt-14 flex justify-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex justify-center items-center gap-2 bg-white hover:bg-background-50 text-foreground-950 border border-background-200/70 font-bold text-sm px-8 py-3.5 rounded-full shadow-sm transition-all duration-200 hover:shadow-md"
          >
            <i className="ri-layout-line text-primary-500 text-lg"></i>
            間取り図を見る
          </button>
        </div>
        </ScrollReveal>
      </div>

      {/* --- モーダル (ポップアップ) の実装 --- */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm backdrop-animate"
          onClick={() => setIsModalOpen(false)}
        >
          <style>{`
            .backdrop-animate {
              animation: fadeIn 0.2s ease-out forwards;
            }
            .modal-animate {
              animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes popIn {
              from { opacity: 0; transform: scale(0.95) translateY(10px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>

          <div
            className="relative w-full max-w-4xl bg-white rounded-lg p-2 shadow-2xl modal-animate"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 md:-right-12 md:top-0 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
              aria-label="閉じる"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            <img
              src={floorplan}
              alt="間取り図"
              className="w-full h-auto max-h-[80vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
}