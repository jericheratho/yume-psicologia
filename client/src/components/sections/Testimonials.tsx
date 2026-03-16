/* ============================================================
   Testimonials Section — Yume Psicologia
   Style: Editorial quote cards, warm cream, staggered layout
   ============================================================ */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Eu fui fazer a avaliação achando que seria algo técnico e distante. Mas foi um processo muito cuidadoso. Eu me senti respeitado o tempo todo. Quando recebi o resultado, entendi a não me apegar ao rótulo, mas a me conhecer melhor e a tomar decisões importantes.",
    name: "Paulo Dias",
    date: "09 de dez. 2025",
    service: "Avaliação Neuropsicológica",
  },
  {
    quote:
      "Eu morria de vergonha de falar em grupo. Na primeira sessão eu quase não abri a boca. Mas ouvir outras pessoas contando coisas tão parecidas com as minhas foi um alívio enorme. Eu percebi que não estava sozinho, e isso mudou muita coisa.",
    name: "Juliana Silva",
    date: "20 de nov. 2025",
    service: "Terapia em Grupo",
  },
  {
    quote:
      "Eu demorei muito pra procurar terapia porque achava que dava conta sozinha. Quando comecei, percebi que eu estava só sobrevivendo. Hoje eu me sinto mais inteiro. Não porque os problemas sumiram, mas porque eu aprendi a lidar com eles de um jeito mais saudável.",
    name: "Renata Oliveira",
    date: "13 de set. 2025",
    service: "Psicoterapia Individual",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-[#EDE6D8]">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#7A8C7E]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#7A8C7E]">
              Depoimentos
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] max-w-lg leading-tight">
            O que nossos{" "}
            <em className="italic text-[#7A8C7E]">clientes dizem...</em>
          </h2>
        </div>

        {/* Main testimonial */}
        <div ref={contentRef} className="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Featured quote */}
            <div className="lg:col-span-2 relative">
              <div className="p-8 md:p-12 bg-white/70 border border-[#2C2A26]/10 rounded-sm min-h-[280px] flex flex-col justify-between">
                <div>
                  <Quote size={32} strokeWidth={1} className="text-[#C4896F]/40 mb-6" />
                  <blockquote className="font-display text-xl md:text-2xl font-light text-[#2C2A26] leading-relaxed italic">
                    "{testimonials[active].quote}"
                  </blockquote>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="font-body text-sm font-medium text-[#2C2A26]">
                      {testimonials[active].name}
                    </p>
                    <p className="font-body text-xs font-light text-[#7A8C7E] mt-0.5">
                      {testimonials[active].service} · {testimonials[active].date}
                    </p>
                  </div>
                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prev}
                      className="w-9 h-9 flex items-center justify-center border border-[#2C2A26]/20 text-[#4A4640] hover:border-[#7A8C7E] hover:text-[#7A8C7E] transition-colors rounded-sm"
                      aria-label="Anterior"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={next}
                      className="w-9 h-9 flex items-center justify-center border border-[#2C2A26]/20 text-[#4A4640] hover:border-[#7A8C7E] hover:text-[#7A8C7E] transition-colors rounded-sm"
                      aria-label="Próximo"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Side: other testimonials mini */}
            <div className="flex flex-col gap-4">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setActive(i)}
                  className={`text-left p-5 border rounded-sm transition-all duration-300 ${
                    i === active
                      ? "border-[#7A8C7E] bg-[#7A8C7E]/10"
                      : "border-[#2C2A26]/10 bg-white/40 hover:border-[#7A8C7E]/40"
                  }`}
                >
                  <p className="font-body text-xs font-light text-[#4A4640] leading-relaxed line-clamp-2 mb-2">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-body text-xs font-medium text-[#2C2A26]">{t.name}</p>
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${i === active ? "bg-[#7A8C7E]" : "bg-[#2C2A26]/20"}`}
                    />
                  </div>
                </button>
              ))}

              {/* Dots indicator */}
              <div className="flex gap-2 mt-2 justify-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-[#7A8C7E]" : "w-2 bg-[#2C2A26]/20"
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
