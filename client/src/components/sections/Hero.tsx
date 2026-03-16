/* ============================================================
   Hero Section — Yume Psicologia
   Style: Asymmetric editorial layout, full-height, sage green background
   Hero image: Minimalist sage green with journal and photos
   ============================================================ */
import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/YumePsicologia_5c1054ef.webp";

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
      className="relative min-h-screen flex items-end overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />

      {/* Kanji 夢 decorative background element */}
      <div
        className="absolute right-4 md:right-[30%] top-1/2 -translate-y-1/2 font-display text-[200px] md:text-[320px] leading-none text-[#2C2A26]/[0.04] select-none pointer-events-none"
        aria-hidden="true"
      >
        夢
      </div>

      {/* Content */}
      <div className="relative container pb-24 pt-40 md:pt-20 md:pb-32">
        <div className="max-w-xl">
          {/* Eyebrow - hidden */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-200 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="hidden" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#8FBF8F]">
            </span>
          </div>

          {/* Main heading */}
          <h1
            className={`font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#2C2A26] mb-6 transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            E se a sua história
            <br />
            <em className="italic text-[#8FBF8F]">não precisasse ser</em>
            <br />
            corrigida, mas
            <br />
            <em className="italic text-[#8FBF8F]">elaborada?</em>
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
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#8FBF8F] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#6B9B6B] transition-colors duration-300"
            >
              Agendar consulta
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#8FBF8F] text-[#8FBF8F] font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#8FBF8F]/10 transition-colors duration-300"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8FBF8F] opacity-60 hover:opacity-100 transition-opacity animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={18} strokeWidth={1.5} />
      </button>
    </section>
  );
}
