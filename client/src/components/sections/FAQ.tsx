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
        className="w-full flex items-start justify-between gap-4 py-6 text-left group transition-all duration-300"
        aria-expanded={open}
      >
        <div className="flex items-start gap-4">
          <span className="font-display text-sm text-[#8FBF8F] mt-0.5 flex-shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-body text-base font-light text-[#2C2A26] group-hover:text-[#8FBF8F] transition-colors leading-relaxed">
            {faq.question}
          </span>
        </div>
        <div className="flex-shrink-0 mt-0.5 transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
          {open ? (
            <Minus size={16} className="text-[#8FBF8F]" />
          ) : (
            <Plus size={16} className="text-[#4A4640] group-hover:text-[#8FBF8F] transition-colors" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed pl-9 animate-fade-in">
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
    <section id="faq" className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left: header */}
          <div ref={headingRef} className="fade-up lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8FBF8F]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#8FBF8F]">
                Dúvidas
              </span>
            </div>
                 <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] leading-tight mb-6">Perguntas{" "}
              <em className="italic text-[#8FBF8F]">frequentes</em>
            </h2>
            <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed mb-8">
              Não encontrou o que procurava? Entre em contato pelo WhatsApp e
              respondemos com prazer.
            </p>
            <a
              href="https://wa.me/message/YJ74EWIKNVCGA1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#8FBF8F] text-white font-body text-sm font-medium tracking-wide rounded-sm hover:bg-[#6B9B6B] transition-colors duration-300"
            >
              Fale Conosco
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
