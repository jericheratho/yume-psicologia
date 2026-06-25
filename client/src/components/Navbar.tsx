/* ============================================================
   Navbar — Yume Psicologia
   Style: Japonismo Contemporâneo — fixed top, transparent → cream on scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { label: "Psicoterapia Individual", href: "#servicos" },
  { label: "Avaliação Neuropsicológica", href: "#servicos" },
  { label: "Acolhimento Terapêutico", href: "#servicos" },
  { label: "Orientação & Acompanhamento", href: "#servicos" },
  { label: "Brasileiros no Exterior", href: "#exterior" },
];

const navLinks = [
  { label: "Início", href: "#inicio" },
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
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#8FBF8F]/10"
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
            <img
              src="https://image2url.com/r2/default/images/1773686578779-aae60c2f-dc93-4df5-9b54-80c8e4bdce98.png"
              alt="Yume Psicologia"
              className={`h-12 md:h-14 w-auto transition-all duration-500 ${scrolled ? "" : "brightness-0 invert opacity-90"}`} 
              style={{width: '117px', height: '50px'}}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#4A4640] hover:text-[#699169]" : "text-white hover:text-[#B5D9B5]"
              }`}
            >
              Início
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 font-body text-sm font-medium tracking-wide transition-colors duration-300 outline-none cursor-pointer ${
                scrolled ? "text-[#4A4640] hover:text-[#699169]" : "text-white hover:text-[#B5D9B5]"
              }`}>
                Serviços <ChevronDown size={14} className="opacity-60" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border-[#E8F0E8] p-2 min-w-[240px] shadow-xl animate-in fade-in zoom-in-95 duration-200">
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.label}
                    className="font-body text-sm font-light text-[#4A4640] hover:text-[#699169] hover:bg-[#F9FBF9] cursor-pointer py-3 px-4 rounded-sm transition-colors"
                    onClick={() => handleNavClick(service.href)}
                  >
                    {service.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navLinks.slice(1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[#4A4640] hover:text-[#699169]" : "text-white hover:text-[#B5D9B5]"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="https://wa.me/message/YJ74EWIKNVCGA1"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 font-body text-sm font-medium tracking-wide rounded-sm transition-all duration-300 ${
                scrolled 
                ? "bg-[#8FBF8F] text-white hover:bg-[#6B9B6B] shadow-sm" 
                : "bg-white/10 text-white border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#699169]"
              }`}
            >
              Quero ser acolhido(a)
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${scrolled ? "text-[#2C2A26]" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5F0E8] flex flex-col justify-center items-center gap-8 transition-all duration-500 md:hidden overflow-y-auto pt-20 pb-10 ${
          menuOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
          className="font-display text-3xl font-light text-[#2C2A26]"
        >
          Início
        </a>
        
        <div className="flex flex-col items-center gap-4 w-full px-10">
          <div className="h-px w-12 bg-[#8FBF8F]/30" />
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] text-[#8FBF8F]">Serviços</span>
          <div className="flex flex-col items-center gap-4">
            {services.map((service) => (
              <a
                key={service.label}
                href={service.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(service.href); }}
                className="font-display text-2xl font-light text-[#4A4640] hover:text-[#8FBF8F] transition-colors"
              >
                {service.label}
              </a>
            ))}
          </div>
          <div className="h-px w-12 bg-[#8FBF8F]/30" />
        </div>

        {navLinks.slice(1).map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="font-display text-3xl font-light text-[#2C2A26]"
          >
            {link.label}
          </a>
        ))}
        
        <a
          href="https://wa.me/message/YJ74EWIKNVCGA1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 px-10 py-4 bg-[#8FBF8F] text-white font-body text-base font-medium tracking-wide rounded-sm shadow-lg active:scale-95 transition-transform"
          onClick={() => setMenuOpen(false)}
        >
          Agendar consulta
        </a>
      </div>
    </>
  );
}
