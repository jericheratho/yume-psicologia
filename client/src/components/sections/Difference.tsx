/* ============================================================
   Difference Section — Yume Psicologia
   Style: Centered elegant layout with video call visual focal point
   Features: Centered heading, central image, light green content boxes
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
  const imageRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;
  const cardsRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section className="py-20 md:py-32 bg-[#ecf0ea]">
      <div className="container">
        {/* Centered heading */}
        <div ref={headingRef} className="mb-16 md:mb-24">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] leading-tight mb-6">
            Um cuidado que começa antes da <em className="italic text-[#8FBF8F] font-light">primeira sessão</em>
          </h2>
        </div>

        {/* Content section with image and text side-by-side */}
        <div ref={contentRef} className="mb-20 md:mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text content - left side */}
            <div className="space-y-5">
              <p className="font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed">
                Na Yume Psicologia, o acolhimento começa no primeiro contato. Você pode iniciar a conversa por <strong>ligação</strong>, <strong>videochamada</strong> ou <strong>WhatsApp</strong> — da forma que for mais confortável para você.
              </p>
              <p className="font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed">
                Após a primeira sessão, você recebe um <strong>Plano Terapêutico Individual</strong>, que apresenta com clareza os objetivos do tratamento e o caminho a ser percorrido.
              </p>
              <p className="font-body text-base md:text-lg font-light text-[#4A4640] leading-relaxed">
                Durante o processo, você também conta com <strong>feedbacks semanais</strong>, acompanhando de forma clara sua evolução na terapia.
              </p>
            </div>

            {/* Video call image - right side */}
            <div ref={imageRef} className="flex justify-center">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/YumePsicologia(1)_240ca9b3.png"
                alt="Video call interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* CTA Button - centered */}
          <div className="flex justify-center mb-20 md:mb-24 mt-8 md:mt-12">
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8FBF8F] text-white font-body font-medium rounded-sm hover:bg-[#6B9B6B] transition-colors duration-300"
            >
              Saiba mais sobre nossos serviços ↓
            </a>
          </div>
        </div>

        {/* Differentials section */}
        <div ref={cardsRef} className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12 md:mb-16">
            <h3 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] mb-3">
              O <em className="italic text-[#8FBF8F] font-light">Cuidado</em> na Yume:
            </h3>
            <p className="font-body text-base md:text-lg font-light text-[#4A4640]">
              Três pilares que definem nosso compromisso com sua transformação
            </p>
          </div>

          {/* Three column grid with enhanced cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {differentials.map((diff) => (
              <div
                key={diff.title}
                className="group relative p-8 md:p-10 bg-gradient-to-br from-[#E8F5E8] to-[#D9ECDA] rounded-2xl border border-[#C5E0C5] hover:border-[#8FBF8F] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {diff.icon}
                </div>

                {/* Divider line */}
                <div className="w-12 h-1 bg-[#8FBF8F] rounded-full mb-6"></div>

                {/* Title */}
                <h4 className="font-display text-xl md:text-2xl font-light text-[#2C2A26] mb-4 leading-tight">
                  {diff.title}
                </h4>

                {/* Description */}
                <p className="font-body text-base font-light text-[#4A4640] leading-relaxed">
                  {diff.description}
                </p>

                {/* Hover accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#8FBF8F]/5 rounded-full -mr-10 -mt-10 group-hover:bg-[#8FBF8F]/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
