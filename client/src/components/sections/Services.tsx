/* ============================================================
   Services Section — Yume Psicologia
   Style: Asymmetric grid, editorial cards with thin borders
   ============================================================ */
import { useRef, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Brain, Users, Compass, ClipboardList } from "lucide-react";

const THERAPY_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/yume-therapy-k3TNWzqPvFJeZksvzMJsV5.webp";
const GROUP_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/yume-group-YPW5WVAh2XD3HzurKjvMWR.webp";

const services = [
  {
    icon: Brain,
    number: "01",
    title: "Psicoterapia Individual",
    subtitle: "Um espaço só seu",
    description:
      "Um espaço seguro para falar do que está pesado, entender seus padrões e começar a agir diferente. Acompanhamento psicológico estruturado para quem busca clareza, direção e mudança real.",
    tag: "Gestalt-terapia · TCC",
    highlight: true,
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Avaliação Neuropsicológica",
    subtitle: "Investigação com cuidado",
    description:
      "Investigação responsável e humanizada. Indicada para diagnóstico de TDAH, TEA, Altas Habilidades e outros, laudo clínico ou orientação especializada.",
    tag: "TDAH · TEA · AH",
    highlight: false,
  },
  {
    icon: Users,
    number: "03",
    title: "Acolhimento Terapêutico",
    subtitle: "Você não está sozinho",
    description:
      "Aprofunde-se em um tema específico com um plano terapêutico claro e direcionado. Com feedbacks mensais, você acompanha seu progresso ao longo do tratamento, trabalhando cada questão no seu ritmo e com mais consciência sobre sua evolução.",
    tag: "Plano terapêutico personalizado",
    highlight: false,
  },
  {
    icon: Compass,
    number: "04",
    title: "Orientação & Acompanhamento",
    subtitle: "Direção em momentos difíceis",
    description:
      "Para momentos de decisão, crise ou situações específicas que precisam de direção. Indicado a profissionais e estudantes que buscam suporte pontual e qualificado.",
    tag: "Profissionais · Estudantes",
    highlight: false,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("visible"), index * 100);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [index]);

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="fade-up group relative flex flex-col p-7 border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-white border-[#2C2A26]/10 text-[#2C2A26] hover:bg-[#8FBF8F] hover:border-[#8FBF8F] hover:text-white"
    >
      {/* Number */}
      <span
        className="font-display text-5xl font-light leading-none mb-4 text-[#2C2A26]/8 group-hover:text-white/20 transition-colors duration-500"
      >
        {service.number}
      </span>

      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-sm mb-5 bg-[#8FBF8F]/8 group-hover:bg-white/20 transition-colors duration-500">
        <Icon
          size={20}
          strokeWidth={1.5}
          className="text-[#8FBF8F] group-hover:text-white transition-colors duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="font-body text-xs font-light tracking-[0.2em] uppercase mb-1 text-[#8FBF8F] group-hover:text-white transition-colors duration-500">
          {service.subtitle}
        </p>
        <h3 className="font-display text-2xl font-medium mb-3 leading-tight text-[#2C2A26] group-hover:text-white transition-colors duration-500">
          {service.title}
        </h3>
        <p className="font-body text-base font-light leading-relaxed text-[#4A4640] group-hover:text-white/90 transition-colors duration-500">
          {service.description}
        </p>
      </div>

      {/* Tag */}
      <div className="mt-5 pt-5 border-t border-current/10 group-hover:border-white/20 flex flex-col gap-4 transition-colors duration-500">
        <span className="font-body text-xs font-light tracking-wide text-[#8FBF8F] group-hover:text-white transition-colors duration-500">
          {service.tag}
        </span>
        
        {/* WhatsApp Button */}
        <a
          href={service.title === "Psicoterapia Individual" ? "http://bit.ly/4rwMSTN" : service.title === "Avaliação Neuropsicológica" ? "http://bit.ly/4tPDjR6" : service.title === "Acolhimento Terapêutico" ? "https://wa.me/message/YJ74EWIKNVCGA1" : "http://bit.ly/4aOYdqZ"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-4 py-2.5 text-xs font-medium tracking-wide rounded-sm transition-colors duration-300 bg-[#8FBF8F] text-white hover:bg-[#6B9B6B] group-hover:bg-white group-hover:text-[#8FBF8F]"
        >
          {service.title === "Psicoterapia Individual" ? "Agendar uma sessão individual" : service.title === "Avaliação Neuropsicológica" ? "Conheça a Avaliação" : service.title === "Acolhimento Terapêutico" ? "Saiba mais" : "Solicitar orçamento"}
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;

  return (
    <section id="servicos" className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8FBF8F]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#8FBF8F]">
              Nossos serviços
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] max-w-lg leading-tight">Não é só terapia online.{" "}
              <em className="italic text-[#8FBF8F]">Deixa a gente te explicar.</em>
            </h2>
            <p className="font-body text-base font-light text-[#4A4640] max-w-xs leading-relaxed">
              Cada modalidade foi pensada para atender um momento específico da
              sua história.
            </p>
          </div>
        </div>

        {/* Services grid + image - align all 4 boxes in a row */}
        <div className="flex justify-center">
          {/* 4 services in one row - centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl">
            {services.map((service, i) => (
              <ServiceCard key={service.number} service={service} index={i} />
            ))}
          </div>


        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/message/YJ74EWIKNVCGA1"
            target="_blank"
            rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#6B9B6B] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#5A7B5A] transition-colors duration-300"
          >
            Não sei qual serviço escolher, me ajude
          </a>
          <p className="font-body text-xs text-[#8FBF8F] mt-3">
            Conversamos primeiro e indicamos o melhor formato para você.
          </p>
        </div>
      </div>
    </section>
  );
}
