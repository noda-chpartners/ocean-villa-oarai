import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About ', href: '#concept' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Access', href: '#access' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-accent-600 border-b border-accent-600/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a
            href="#"
            className={`font-heading font-bold text-xl tracking-wide whitespace-nowrap transition-colors duration-300 ${
              scrolled ? 'text-foreground-50' : 'text-white'
            }`}
          >
            Ocean villa 大洗
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`text-sm font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  scrolled
                    ? 'text-foreground-50 hover:text-primary-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#reservation');
              }}
              className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm' // ◀ スクロール時: 背景primary-600、文字白
                  : 'bg-accent-600 text-white hover:bg-accent-500' // ◀ 初期状態: 背景accent-600、文字白
              }`}
            >
              ご予約
            </a>
          </div>

          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              scrolled ? 'text-foreground-50' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニューを開く"
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-accent-600 border-t border-accent-600/50 shadow-md">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-foreground-50 hover:text-primary-600 text-sm font-bold py-2 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#reservation');
              }}
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-bold py-2.5 px-5 rounded-full text-center whitespace-nowrap cursor-pointer shadow-sm mt-2" // ◀ スマホメニュー内のボタンも同様に変更
            >
              ご予約はこちら
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}