/* ============================================================
   Difference Section — Yume Psicologia
   Style: Clean, structured layout with three key differentials
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const differentials = [
  {
    title: "Contato do seu jeito",
    description: "Escolha iniciar por ligação, vídeo ou mensagem.",
    icon: "📱",
  },
  {
    title: "Plano terapêutico individual",
    description: "Um processo estruturado e pensado para você.",
    icon: "📋",
  },
  {
    title: "Feedbacks semanais",
    description: "Acompanhe seu progresso ao longo da terapia.",
    icon: "📈",
  },
];

export default function Difference() {
  const headingRef = useScrollReveal(0.15) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;
  const differentialsRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section className="py-24 md:py-32 bg-[#F9F8F6]">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16 md:mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] leading-tight max-w-3xl mb-6">
            Um cuidado que começa antes da <em className="italic text-[#8FBF8F]">primeira sessão</em>
          </h2>
        </div>

        {/* Main content */}
        <div ref={contentRef} className="fade-up mb-16 md:mb-24 max-w-3xl">
          <p className="font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed mb-6">
            Na Yume Psicologia, o acolhimento começa no primeiro contato. Você pode iniciar a conversa por ligação, videochamada ou WhatsApp — da forma que for mais confortável para você.
          </p>
          <p className="font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed mb-6">
            Após a primeira sessão, você recebe um Plano Terapêutico Individual, que apresenta com clareza os objetivos do tratamento e o caminho a ser percorrido.
          </p>
          <p className="font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed">
            Durante o processo, você também conta com feedbacks semanais, acompanhando de forma clara sua evolução na terapia.
          </p>
        </div>

        {/* Differentials section */}
        <div ref={differentialsRef} className="fade-up mb-12">
          <h3 className="font-display text-2xl md:text-3xl font-light text-[#2C2A26] mb-10">
            Diferenciais da Yume
          </h3>

          {/* Three column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((diff, index) => (
              <div
                key={diff.title}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="text-5xl mb-6">{diff.icon}</div>

                {/* Title */}
                <h4 className="font-display text-xl font-light text-[#2C2A26] mb-3">
                  {diff.title}
                </h4>

                {/* Description */}
                <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 font-body text-sm font-medium text-[#8FBF8F] hover:text-[#6B9B6B] transition-colors duration-300"
          >
            Saiba mais sobre nossos serviços ↓
          </a>
        </div>
      </div>
    </section>
  );
}
