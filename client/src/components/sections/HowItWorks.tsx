/* ============================================================
   HowItWorks Section — Yume Psicologia
   Style: Numbered steps, moss green background, editorial
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Entre em contato pelo WhatsApp",
    description:
      "Envie uma mensagem contando um pouco do que você está buscando. Sem formulários complicados.",
  },
  {
    number: "02",
    title: "Entendemos sua necessidade",
    description:
      "Conversamos com você e indicamos o profissional e o formato mais adequado para o seu momento.",
  },
  {
    number: "03",
    title: "Escolha o dia e horário",
    description:
      "Você recebe as orientações finais, escolhe o melhor horário e inicia o seu atendimento.",
  },
  {
    number: "04",
    title: "Comece sua jornada",
    description:
      "Sua primeira sessão acontece no conforto da sua casa, com total segurança e privacidade.",
  },
];

export default function HowItWorks() {
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;
  const stepsRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section className="py-24 md:py-32 bg-[#8FBF8F]">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-white/50" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-white/70">
              Como funciona
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-light text-white max-w-lg leading-tight">Como agendar{" "}
              <em className="italic text-white/80">seu atendimento?</em>
            </h2>
            <p className="font-body text-sm font-light text-white/70 max-w-xs leading-relaxed">
              Simples, humano e sem burocracia. Do primeiro contato à primeira sessão.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div ref={stepsRef} className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`relative p-8 ${
                i < steps.length - 1
                  ? "border-b md:border-b-0 md:border-r border-white/10"
                  : ""
              }`}
            >
              {/* Step number */}
              <div className="font-display text-6xl font-light text-[#d9ecda] leading-none mb-6">
                {step.number}
              </div>

              {/* Connector dot */}
              <div className="absolute top-8 right-0 translate-x-1/2 hidden lg:block">
                {i < steps.length - 1 && (
                  <div className="w-2 h-2 rounded-full bg-white/30" />
                )}
              </div>

              <h3 className="font-display text-xl font-medium text-white mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="font-body text-sm font-light text-white/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/message/YJ74EWIKNVCGA1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#7A8C7E] font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#F5F0E8] transition-colors duration-300"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Falar pelo WhatsApp
          </a>
          <p className="font-body text-xs text-white/50">
            Respondemos em até 24 horas
          </p>
        </div>
      </div>
    </section>
  );
}
