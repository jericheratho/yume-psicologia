/* ============================================================
   Navbar — Yume Psicologia
   Style: Light, transparent → white/cream on scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocation } from "wouter";

const services = [
  { label: "Psicoterapia Individual", href: "/servicos/psicoterapia-individual" },
  { label: "Avaliação Neuropsicológica", href: "/servicos/avaliacao-neuropsicologica" },
  { label: "Avaliação Psicológica", href: "/servicos/avaliacao-psicologica" },
  { label: "Acolhimento & Avaliação para Cirurgias", href: "/servicos/acolhimento-cirurgias" },
  { label: "Orientação & Acompanhamento", href: "/servicos/orientacao-acompanhamento" },
  { label: "Brasileiros no Exterior", href: "/servicos/brasileiros-no-exterior" },
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
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    
    if (href.startsWith("#")) {
      if (location === "/") {
        // Se já estiver na home, apenas faz o scroll
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Se estiver em outra página, vai para a home com a âncora
        setLocation("/" + href);
      }
    } else {
      // Navegação para páginas internas
      setLocation(href);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { 
              e.preventDefault(); 
              handleNavClick("#inicio"); 
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src="https://image2url.com/r2/default/images/1773686578779-aae60c2f-dc93-4df5-9b54-80c8e4bdce98.png"
              alt="Yume Psicologia"
              className="h-12 md:h-14 w-auto" 
              style={{width: '117px', height: '50px'}}
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavClick("#inicio"); 
              }}
              className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                scrolled ? "text-[#4A4640] hover:text-[#699169]" : "text-[#2C2A26] hover:text-[#699169]"
              }`}
            >
              Início
            </a>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center gap-1 font-body text-sm font-medium tracking-wide transition-colors duration-300 outline-none cursor-pointer ${
                scrolled ? "text-[#4A4640] hover:text-[#699169]" : "text-[#2C2A26] hover:text-[#699169]"
              }`}>
                Serviços <ChevronDown size={14} className="opacity-40" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white border-[#E8F0E8] p-2 min-w-[240px] shadow-lg">
                {services.map((service) => (
                  <DropdownMenuItem
                    key={service.label}
                    className="font-body text-sm font-light text-[#4A4640] hover:text-[#699169] hover:bg-[#F9FBF9] cursor-pointer py-2.5 px-3 transition-colors"
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
                onClick={(e) => { 
                  e.preventDefault(); 
                  handleNavClick(link.href); 
                }}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                  scrolled ? "text-[#4A4640] hover:text-[#699169]" : "text-[#2C2A26] hover:text-[#699169]"
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <a
              href="https://wa.me/message/YJ74EWIKNVCGA1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 font-body text-sm font-medium tracking-wide rounded-sm transition-all duration-300 bg-[#8FBF8F] text-white hover:bg-[#6B9B6B]"
            >
              Quero ser acolhido(a)
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[#2C2A26] transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#F5F0E8] flex flex-col justify-center items-center gap-6 transition-all duration-500 md:hidden overflow-y-auto pt-24 pb-12 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <a
          href="/"
          onClick={(e) => { 
            e.preventDefault(); 
            handleNavClick("#inicio"); 
          }}
          className="font-display text-2xl font-light text-[#2C2A26]"
        >
          Início
        </a>
        
        <div className="flex flex-col items-center gap-3">
          <span className="font-body text-[10px] font-bold uppercase tracking-widest text-[#8FBF8F]">Serviços</span>
          {services.map((service) => (
            <a
              key={service.label}
              href={service.href}
              onClick={(e) => { 
                e.preventDefault(); 
                handleNavClick(service.href); 
              }}
              className="font-display text-xl font-light text-[#4A4640] text-center px-6"
            >
              {service.label}
            </a>
          ))}
        </div>

        {navLinks.slice(1).map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { 
              e.preventDefault(); 
              handleNavClick(link.href); 
            }}
            className="font-display text-2xl font-light text-[#2C2A26]"
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
