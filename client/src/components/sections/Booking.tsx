/* ============================================================
   Booking Section — Yume Psicologia
   Style: Green background with minimal, integrated Setmore calendar
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";

export default function Booking() {
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    // Load Setmore widget script
    const script = document.createElement("script");
    script.src = "https://yumepsicologia.setmore.com/static/js/iframe.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="agendamento" className="py-24 md:py-32 bg-[#8FBF8F]">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16 md:mb-20 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-white/50" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-white/70">
              Agende sua consulta
            </span>
            <div className="h-px w-8 bg-white/50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white max-w-3xl leading-tight mx-auto">
            Escolha o melhor horário para você
          </h2>
          <p className="font-body text-base md:text-lg font-light text-white/80 mt-6 max-w-2xl mx-auto">
            Visualize a disponibilidade dos nossos profissionais e reserve seu horário de forma rápida e segura.
          </p>
        </div>

        {/* Setmore Calendar Widget - Minimal Style */}
        <div ref={contentRef} className="fade-up">
          <div className="max-w-4xl mx-auto">
            {/* Setmore Iframe with custom styling */}
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <iframe
                src="https://yumepsicologia.setmore.com/"
                style={{
                  width: "100%",
                  height: "700px",
                  border: "none",
                }}
                title="Setmore Booking Calendar"
                allow="payment"
              />
            </div>
          </div>
        </div>

        {/* Alternative booking methods */}
        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-light text-white mb-2">
              Por email
            </h3>
            <p className="font-body text-sm font-light text-white/80">
              <a href="mailto:yumepsicologia@gmail.com" className="text-white hover:underline font-medium">
                yumepsicologia@gmail.com
              </a>
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.707 12.293a.999.999 0 00-1.414 0L13 16.586V9a1 1 0 10-2 0v7.586l-3.293-3.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l5-5a.999.999 0 000-1.414z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-light text-white mb-2">
              WhatsApp
            </h3>
            <p className="font-body text-sm font-light text-white/80">
              <a href="https://wa.me/message/YJ74EWIKNVCGA1" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-medium">
                Envie uma mensagem
              </a>
            </p>
          </div>

          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-full mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-display text-lg font-light text-white mb-2">
              Calendário
            </h3>
            <p className="font-body text-sm font-light text-white/80">
              Veja a disponibilidade acima
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
