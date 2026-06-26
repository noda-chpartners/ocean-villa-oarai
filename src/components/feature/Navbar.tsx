import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'コンセプト', href: '#concept' },
  { label: 'お部屋', href: '#rooms' },
  { label: '設備', href: '#facilities' },
  { label: 'アクセス', href: '#access' },
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
          ? 'bg-background-50 border-b border-background-200/70'
          : 'bg-transparent'
      }`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a
            href="#"
            className={`font-heading font-bold text-xl tracking-wide whitespace-nowrap transition-colors duration-300 ${
              scrolled ? 'text-foreground-950' : 'text-white'
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
                    ? 'text-foreground-700 hover:text-foreground-950'
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
                  ? 'bg-accent-500 text-foreground-950 hover:bg-accent-600'
                  : 'bg-accent-500 text-foreground-950 hover:bg-accent-400'
              }`}
            >
              ご予約
            </a>
          </div>

          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              scrolled ? 'text-foreground-950' : 'text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニューを開く"
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background-50 border-t border-background-200/70">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-foreground-700 hover:text-foreground-950 text-sm font-medium py-2 cursor-pointer"
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
              className="bg-accent-500 text-foreground-950 text-sm font-bold py-2.5 px-5 rounded-full text-center whitespace-nowrap cursor-pointer"
            >
              ご予約はこちら
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}