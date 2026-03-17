/* ============================================================
   Navbar — Yume Psicologia
   Style: Japonismo Contemporâneo — fixed top, transparent → cream on scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Decorative line - hidden */}
          <div className="hidden" />
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center gap-2 group"
          >
            {/* Replace with your logo image */}
            <img
              src="https://image2url.com/r2/default/images/1773686578779-aae60c2f-dc93-4df5-9b54-80c8e4bdce98.png"
              alt="Yume Psicologia"
              className="h-12 md:h-14 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-body text-sm font-light tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[#7A8C7E] hover:text-[#6B9B6B]" : "text-white hover:text-[#ddf8e3]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/message/YJ74EWIKNVCGA1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#8FBF8F] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#6B9B6B] transition-colors duration-300"
            >
              Quero ser acolhido(a)
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#2C2A26]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="font-display text-3xl font-light text-[#2C2A26] hover:text-[#7A8C7E] transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/message/YJ74EWIKNVCGA1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-3 bg-[#8FBF8F] text-white font-body text-base font-medium tracking-wide rounded-sm"
          onClick={() => setMenuOpen(false)}
        >
          Agendar consulta
        </a>
      </div>
    </>
  );
}
