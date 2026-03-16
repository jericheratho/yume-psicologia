/* ============================================================
   FAQ Section — Yume Psicologia
   Style: Accordion, clean editorial, warm cream
   ============================================================ */
import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "Preciso saber qual serviço escolher antes de falar com vocês?",
    answer:
      "Não, conversamos primeiro e indicamos o melhor formato para você. Basta entrar em contato pelo WhatsApp contando um pouco do que está buscando.",
  },
  {
    question: "Os atendimentos são apenas online?",
    answer:
      "Sim, todos os atendimentos da Yume são realizados no formato online, com total segurança e privacidade. Você pode participar do conforto da sua casa.",
  },
  {
    question: "Vocês atendem por plano de saúde ou têm valores acessíveis?",
    answer:
      "Trabalhamos com valores sociais e cobrimos alguns planos de saúde. Confira a disponibilidade entrando em contato conosco.",
  },
  {
    question: "Vocês emitem nota para reembolso?",
    answer:
      "Sim, emitimos nota fiscal conforme as exigências do seu plano de saúde para facilitar o processo de reembolso.",
  },
  {
    question: "E se eu nunca fiz terapia antes?",
    answer:
      "Sem problema! Explicamos tudo com calma e te orientamos desde o início. Muitos dos nossos clientes chegaram sem nenhuma experiência anterior com terapia.",
  },
  {
    question: "Como funciona a primeira sessão?",
    answer:
      "A primeira sessão é um momento de acolhimento e escuta. O profissional vai entender melhor o que você está buscando e como pode te ajudar. Não há pressão nem expectativas — é um espaço só seu.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#2C2A26]/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="font-display text-sm text-[#7A8C7E] mt-0.5 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-base font-light text-[#2C2A26] group-hover:text-[#7A8C7E] transition-colors leading-relaxed">
            {faq.question}
          </span>
        </div>
        <div className="flex-shrink-0 mt-0.5">
          {open ? (
            <Minus size={16} className="text-[#7A8C7E]" />
          ) : (
            <Plus size={16} className="text-[#4A4640] group-hover:text-[#7A8C7E] transition-colors" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-400 ease-out ${
          open ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed pl-9">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F5F0E8]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: header */}
          <div ref={headingRef} className="fade-up lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-[#7A8C7E]" />
              <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#7A8C7E]">
                Dúvidas
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] leading-tight mb-6">
              Perguntas{" "}
              <em className="italic text-[#7A8C7E]">frequentes</em>
            </h2>
            <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed mb-8">
              Não encontrou o que procurava? Entre em contato pelo WhatsApp e
              respondemos com prazer.
            </p>
            <a
              href="https://wa.me/5511999999999?text=Olá%2C+tenho+uma+dúvida+sobre+os+serviços+da+Yume."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#7A8C7E] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#5A6B5E] transition-colors duration-300"
            >
              Falar pelo WhatsApp
            </a>
          </div>

          {/* Right: accordion */}
          <div ref={contentRef} className="fade-up lg:col-span-3">
            <div className="border-t border-[#2C2A26]/10">
              {faqs.map((faq, i) => (
                <FAQItem key={faq.question} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
