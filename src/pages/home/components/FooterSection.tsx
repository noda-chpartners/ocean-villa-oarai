export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 2つ目のコードで使われていたリンクを配列化
  const navLinks = [
    { href: '#concept', label: 'コンセプト' },
    { href: '#rooms', label: 'お部屋' },
    { href: '#facilities', label: '設備' },
    { href: '#access', label: 'アクセス' },
    { href: '#reservation', label: 'ご予約' },
  ];

  return (
    <footer className="bg-foreground-700 text-background-50">
      {/* Upper section */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18 flex flex-col items-center text-center">

        {/* Brand */}
        <div className="mb-10 flex flex-col items-center">
          <p className="font-heading font-bold text-3xl tracking-tight">
            Ocean villa 大洗
          </p>
          <p className="font-heading text-base tracking-tight mb-4">
            Ocean villa Oarai
          </p>
        </div>

        {/* Navigation Links */}
        <div className="mb-12 w-full">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-background-50/70 text-sm hover:text-background-50 transition-colors duration-300 cursor-pointer"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <ul className="space-y-2 text-background-50/70 text-sm">
            <li>
              TEL: <a href="tel:08049470316" className="hover:text-background-50 transition-colors">080-4947-0316</a>
            </li>
            <li>チェックイン: 15:00</li>
            <li>チェックアウト: 10:00</li>
            <li>〒311-1301</li>
            <li>茨城県東茨城郡大洗町磯浜町6902-1</li>
            <li className="pt-4">
              <a
                href="https://www.booking.com/Share-hRPX64"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors"
              >
                <i className="ri-external-link-line"></i> Booking.comで予約
              </a>
            </li>
            <li >
              <a
                href="https://www.airbnb.jp/rooms/1155566626188288038?unique_share_id=d7057806-9cd8-4823-9e83-a55af4aa6b8f&viralityEntryPoint=1&s=76"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-accent-400 hover:text-accent-300 transition-colors"
              >
                <i className="ri-external-link-line"></i> Airbnbで予約
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 py-6 border-t border-background-50/10 flex flex-col items-center justify-center">
        <p className="text-background-50/40 text-xs">
          &copy; {new Date().getFullYear()} Ocean villa Oarai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}