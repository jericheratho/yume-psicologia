/* ============================================================
   Difference Section — Yume Psicologia
   Style: Sophisticated asymmetrical layout inspired by premium brands
   Features: Image + content box, strong typography, visual depth
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
  const bgRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.15) as React.RefObject<HTMLDivElement>;
  const cardsRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section className="relative py-0 overflow-hidden">
      {/* Top section with background image and content box */}
      <div className="relative h-screen md:h-[600px] flex items-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/difference-section-bg-bBM86Jsb3Q6AnMGvEMcmv2.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9F8F6] via-[#F9F8F6]/80 to-transparent"></div>
        </div>

        {/* Content box - positioned absolutely for asymmetrical layout */}
        <div ref={contentRef} className="relative z-10 container">
          <div className="max-w-2xl">
            {/* Main heading */}
            <h2 className="font-display text-5xl md:text-6xl font-light text-[#2C2A26] leading-tight mb-6">
              Um cuidado que começa antes da <em className="italic text-[#8FBF8F] font-light">primeira sessão</em>
            </h2>

            {/* Subtitle paragraphs */}
            <div className="space-y-5 mb-10">
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

            {/* CTA Button */}
            <a
              href="#servicos"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8FBF8F] text-white font-body font-medium rounded-sm hover:bg-[#6B9B6B] transition-colors duration-300"
            >
              Saiba mais sobre nossos serviços
            </a>
          </div>
        </div>
      </div>

      {/* Differentials section - new background color */}
      <div ref={cardsRef} className="pt-16 md:pt-16 pb-11 md:pb-11 bg-white">
        <div className="container">
          {/* Section heading */}
          <div className="mb-16 md:mb-20">
            <h3 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] mb-4">
              O <em className="italic text-[#8FBF8F] font-light">Cuidado</em> na Yume:
            </h3>
            <p className="font-body text-lg font-light text-[#4A4640] max-w-2xl">
              Três pilares que definem nosso compromisso com sua transformação
            </p>
          </div>

          {/* Three column grid with enhanced cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentials.map((diff, index) => (
              <div
                key={diff.title}
                className="group relative p-8 md:p-10 bg-gradient-to-br from-[#E8F5E8] to-[#D9ECDA] rounded-2xl border border-[#C5E0C5] hover:border-[#8FBF8F] hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {diff.icon}
                </div>

                {/* Divider line */}
                <div className="w-12 h-1 bg-[#8FBF8F] rounded-full mb-6"></div>

                {/* Title */}
                <h4 className="font-display text-2xl font-light text-[#2C2A26] mb-4 leading-tight">
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
