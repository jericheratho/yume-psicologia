/* ============================================================
   Hero Section — Yume Psicologia
   Style: Asymmetric editorial layout, full-height, warm cream
   Hero image: Japanese-inspired serene therapy space
   ============================================================ */
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/yume-hero-ZrWpfvbLkyoqBkkH5LJPqD.webp";

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
      {/* Background image — right-aligned, covers 65% of width on desktop */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <img
          src={HERO_IMAGE}
          alt="Espaço terapêutico sereno"
          className="absolute right-0 top-0 h-full w-full md:w-[65%] object-cover object-center"
        />
        {/* Gradient overlay — left fade for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F0E8] via-[#F5F0E8]/85 md:via-[#F5F0E8]/60 to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F0E8] to-transparent" />
      </div>

      {/* Kanji 夢 decorative background element */}
      <div
        className="absolute right-4 md:right-[30%] top-1/2 -translate-y-1/2 font-display text-[200px] md:text-[320px] leading-none text-[#2C2A26]/[0.04] select-none pointer-events-none"
        aria-hidden="true"
      >
        夢
      </div>

      {/* Content */}
      <div className="relative container pb-24 pt-32 md:pt-0 md:pb-32">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="h-px w-8 bg-[#7A8C7E]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#7A8C7E]">
              Psicologia Online
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#2C2A26] mb-6 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Sonhos,
            <br />
            <em className="italic text-[#7A8C7E]">acolhimento</em>
            <br />
            & muito afeto.
          </h1>

          {/* Subtitle */}
          <p
            className={`font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed mb-10 max-w-md transition-all duration-700 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Cuidado em saúde mental online para quem quer entender e transformar
            a própria história. Com clareza, ética e proximidade.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <a
              href="https://wa.me/5511999999999?text=Olá%2C+vim+do+site+e+quero+mais+informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#7A8C7E] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#5A6B5E] transition-colors duration-300"
            >
              Agendar consulta
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#7A8C7E] text-[#7A8C7E] font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#7A8C7E]/10 transition-colors duration-300"
            >
              Conhecer serviços
            </button>
          </div>

          {/* Stats row */}
          <div
            className={`flex gap-8 mt-14 pt-8 border-t border-[#2C2A26]/10 transition-all duration-700 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {[
              { value: "100%", label: "Online" },
              { value: "+5 anos", label: "de experiência" },
              { value: "2", label: "especialistas" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl font-medium text-[#2C2A26]">{stat.value}</div>
                <div className="font-body text-xs font-light text-[#7A8C7E] tracking-wide mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#7A8C7E] opacity-60 hover:opacity-100 transition-opacity animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </button>
    </section>
  );
}
