/* ============================================================
   Hero Section — Yume Psicologia
   Style: Light, airy, editorial layout with minimalist sage green
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
      className="relative min-h-screen flex items-end overflow-hidden bg-[#F5F0E8]"
    >
      {/* Image background with lighter treatment */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Therapeutic session"
          className={`w-full h-full object-cover transition-all duration-[2000ms] ease-out ${loaded ? "scale-100 opacity-80" : "scale-105 opacity-0"}`}
        />
        {/* Subtle light gradients for text readability without darkening too much */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0E8]/40 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F0E8]/60 via-transparent to-transparent" />
      </div>

      {/* Kanji 夢 decorative background element - more subtle */}
      <div
        className={`absolute right-4 md:right-[15%] top-1/2 -translate-y-1/2 font-display text-[200px] md:text-[350px] leading-none text-[#2C2A26]/[0.03] select-none pointer-events-none transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        aria-hidden="true"
      >
        夢
      </div>

      {/* Content */}
      <div className="relative container pb-20 pt-32 md:pt-20 md:pb-28 lg:pb-32">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Eyebrow label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="h-px w-8 bg-[#8FBF8F]" />
            <span className="font-body text-[10px] font-bold tracking-[0.4em] uppercase text-[#699169]">
              Acolhimento & Psicoterapia
            </span>
          </div>

          {/* Main heading - Reduced size and lighter colors */}
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.15] text-[#2C2A26] mb-6 transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            E se a sua história
            <br />
            <span className="italic font-light text-[#699169]">
              não precisasse ser
            </span>
            <br />
            corrigida, mas
            <br />
            <em className="italic font-light text-[#699169]">elaborada?</em>
          </h1>

          {/* Subtitle - Better readability on light background */}
          <p
            className={`font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed mb-8 md:mb-10 max-w-md transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Cuidado em saúde mental online para quem busca entender e transformar
            a própria história. Com clareza, ética e proximidade.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="https://wa.me/message/YJ74EWIKNVCGA1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8FBF8F] text-white font-body text-sm font-bold tracking-wide rounded-sm hover:bg-[#7BA87B] transition-all duration-300 shadow-sm"
            >
              Agendar consulta
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#8FBF8F] text-[#699169] font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#8FBF8F]/5 transition-all duration-300"
            >
              Conhecer serviços
            </button>
          </div>

          {/* Stats row - Lighter layout */}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14 pt-8 border-t border-[#8FBF8F]/20 transition-all duration-1000 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {[
              { value: "100%", label: "Atendimento Online" },
              { value: "+5 anos", label: "Experiência Clínica" },
              { value: "Equipe", label: "Especialista" },
              { value: "+1500", label: "Pacientes atendidos" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-xl md:text-2xl font-light text-[#699169]">{stat.value}</div>
                <div className="font-body text-[10px] font-bold text-[#4A4640]/60 uppercase tracking-[0.2em] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8FBF8F] transition-all duration-1000 delay-[1200ms] ${loaded ? "opacity-60 hover:opacity-100" : "opacity-0"}`}
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={20} strokeWidth={1.5} className="animate-bounce" />
      </button>
    </section>
  );
}
