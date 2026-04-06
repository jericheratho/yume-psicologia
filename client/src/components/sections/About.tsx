/* ============================================================
   About Section — Yume Psicologia
   Style: Asymmetric layout, abstract watercolor background
   ============================================================ */
import { useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ABSTRACT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/yume-abstract-2c7WeuKHSgUwjHrLrYr9sn.webp";
const VIDEO_CALL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/YumePsicologia(1)_37c4fd57.png";

const values = [
  {
    title: "Elaborar",
    description:
      "Ter um espaço seguro para organizar o que está confuso, sem precisar dar conta de tudo sozinho.",
  },
  {
    title: "Transformar",
    description:
      "Mudar os padrões depois que você entende o que sente. Mudança real, não só alívio temporário.",
  },
  {
    title: "Acolher",
    description:
      "Um espaço de escuta, elaboração e transformação. Com clareza, ética e proximidade.",
  },
];

function ValueCard({ value, index }: { value: typeof values[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), index * 150);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={ref}
      className="fade-up p-8 md:p-10 bg-white rounded-2xl shadow-lg border border-[#9AC89A]/20 hover:shadow-xl hover:border-[#9AC89A]/40 transition-all duration-700 hover:-translate-y-2"
    >
      <h3 className="font-display text-2xl font-medium text-[#2C2A26] mb-3">
        {value.title}
      </h3>
      <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}

export default function About() {
  const headingRef = useScrollReveal(0.15) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;
  const valuesRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section id="sobre" className="py-24 md:py-32 relative overflow-hidden bg-[#F9F8F6]">
      {/* Abstract watercolor background */}
      <div className="absolute inset-0 opacity-30">
        <img
          src={ABSTRACT_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[#e2e7d9]" />

      <div className="relative container">
        {/* Section label */}
        <div ref={headingRef} className="fade-up mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#699169]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#699169]">
              Sobre a Yume
            </span>
          </div>
        </div>

        {/* Main content: asymmetric two-column */}
        <div ref={contentRef} className="fade-up grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start mb-20 relative">
  

          {/* Left: large display text */}
          <div className="lg:col-span-3 relative z-10">
            <div className="relative">
              {/* Kanji decoration */}
              <span
                className="absolute -top-8 -left-4 font-display text-[120px] leading-none text-[#2C2A26]/[0.06] select-none pointer-events-none"
                aria-hidden="true"
              >
                夢
              </span>
               <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2A26] leading-[1.15] relative">Um espaço de
                <br />
                <em className="italic text-[#699169]">escuta</em>
                <em className="italic text-[#699169]">, elaboração</em>
                <br />
                e <em className="italic text-[#699169]">transformação</em>.
              </h2>
            </div>
          </div>

          {/* Right: body text */}
          <div className="lg:col-span-2 flex flex-col gap-6 pt-2 relative z-10">
            <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed">
              <strong className="font-medium text-[#2C2A26]">Yume</strong> significa{" "}
              <em>"sonho"</em> em japonês e representa nosso objetivo de oferecer
              cuidados em saúde mental de forma acessível, democrática e ampliada.
            </p>
            <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed">
              A Yume Psicologia nasceu com o compromisso de oferecer um cuidado
              psicológico ético, acessível e empenhado com a singularidade de cada
              pessoa. Acreditamos que cuidar da saúde mental é recuperar a
              capacidade de projetar novos caminhos, mesmo em momentos difíceis.
            </p>
            <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed">
              Nosso diferencial está na forma como conduzimos cada atendimento:
              com clareza, ética e proximidade. Um espaço profissional de cuidado:
              acessível, responsável e centrado no desenvolvimento emocional.
            </p>

            {/* Accessibility note */}
            <div className="mt-2 p-4 border border-[#9AC89A]/30 bg-white/40 rounded-sm">
              <p className="font-body text-xs font-light text-[#4A4640] leading-relaxed">
                💚 Cuidado psicológico que cabe no seu bolso, com{" "}
                <strong className="font-medium">planos sociais</strong> e opção de{" "}
                <strong className="font-medium">reembolso</strong>. Verifique condições.
              </p>
            </div>
          </div>
        </div>

        {/* Values cards - centered grid */}
        <div ref={valuesRef} className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            {values.map((value, i) => (
              <ValueCard key={value.title} value={value} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
