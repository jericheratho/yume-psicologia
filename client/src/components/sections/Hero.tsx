/* ============================================================
   Hero Section — Yume Psicologia
   Style: Asymmetric editorial layout, full-height, sage green background
   Hero image: Minimalist sage green with journal and photos
   ============================================================ */
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/hero-header-optimized_8b79f13a.jpeg";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden bg-[#2C2A26]"
    >
      {/* Image background with improved treatment */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Therapeutic session"
          className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${loaded ? "scale-105 opacity-60" : "scale-110 opacity-0"}`}
        />
        {/* Gradients for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C2A26]/80 via-[#2C2A26]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2A26] via-transparent to-transparent" />
      </div>

      {/* Kanji 夢 decorative background element */}
      <div
        className={`absolute right-4 md:right-[15%] top-1/2 -translate-y-1/2 font-display text-[200px] md:text-[400px] leading-none text-white/[0.03] select-none pointer-events-none transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        aria-hidden="true"
      >
        夢
      </div>

      {/* Content */}
      <div className="relative container pb-20 pt-32 md:pt-20 md:pb-32 lg:pb-40">
        <div className="max-w-xl lg:max-w-3xl">
          {/* Eyebrow label */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="h-px w-8 bg-[#8FBF8F]" />
            <span className="font-body text-[10px] font-bold tracking-[0.4em] uppercase text-[#8FBF8F]">
              Acolhimento & Psicoterapia
            </span>
          </div>

          {/* Main heading - Refined typography and colors */}
          <h1
            className={`font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.1] text-white mb-8 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            E se a sua história
            <br />
            <span className="italic font-light text-[#B5D9B5] relative inline-block">
              não precisasse ser
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#8FBF8F]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </span>
            <br />
            corrigida, mas
            <br />
            <em className="italic font-light text-[#B5D9B5]">elaborada?</em>
          </h1>

          {/* Subtitle - Better readability */}
          <p
            className={`font-body text-base md:text-lg lg:text-xl font-light text-white/80 leading-relaxed mb-10 max-w-md lg:max-w-lg transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Cuidado em saúde mental online para quem busca entender e transformar
            a própria história. Com clareza, ética e a proximidade que você merece.
          </p>

          {/* CTAs - Refined buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="https://wa.me/message/YJ74EWIKNVCGA1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#8FBF8F] text-[#2C2A26] font-body text-sm font-bold tracking-wide rounded-sm hover:bg-[#B5D9B5] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-[#8FBF8F]/10"
            >
              Agendar consulta
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center px-10 py-4 border border-white/30 text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm"
            >
              Conhecer serviços
            </button>
          </div>

          {/* Stats row - Enhanced layout */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-10 border-t border-white/10 transition-all duration-1000 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {[
              { value: "100%", label: "Atendimento Online" },
              { value: "+5 anos", label: "Experiência Clínica" },
              { value: "Equipe", label: "Especialista" },
              { value: "+1500", label: "Pacientes atendidos" },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div className="font-display text-2xl md:text-3xl font-light text-[#8FBF8F] group-hover:text-white transition-colors duration-300">{stat.value}</div>
                <div className="font-body text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mt-1 group-hover:text-white/60 transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator - Refined */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[#8FBF8F] transition-all duration-1000 delay-[1200ms] ${loaded ? "opacity-60 hover:opacity-100" : "opacity-0"}`}
        aria-label="Rolar para baixo"
      >
        <span className="font-body text-[10px] font-bold uppercase tracking-[0.3em] vertical-text">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#8FBF8F] to-transparent animate-pulse" />
      </button>
    </section>
  );
}
