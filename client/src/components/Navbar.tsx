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
            ? "bg-[#F5F0E8]/95 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center gap-2 group"
          >
            <span className="font-display text-2xl md:text-3xl font-light tracking-wide text-[#2C2A26]">
              Yume
            </span>
            <span
              className="text-[10px] md:text-xs font-body font-light tracking-[0.25em] uppercase text-[#7A8C7E] mt-1"
            >
              Psicologia
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-body text-sm font-light tracking-wide text-[#4A4640] hover:text-[#7A8C7E] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5511999999999?text=Olá%2C+vim+do+site+e+quero+mais+informações."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 bg-[#7A8C7E] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#5A6B5E] transition-colors duration-300"
            >
              Agendar consulta
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
        className={`fixed inset-0 z-40 bg-[#F5F0E8] flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden ${
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
          href="https://wa.me/5511999999999?text=Olá%2C+vim+do+site+e+quero+mais+informações."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-8 py-3 bg-[#7A8C7E] text-white font-body text-base font-medium tracking-wide rounded-sm"
          onClick={() => setMenuOpen(false)}
        >
          Agendar consulta
        </a>
      </div>
    </>
  );
}
