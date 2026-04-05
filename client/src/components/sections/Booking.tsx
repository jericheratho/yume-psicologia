/* ============================================================
   Booking Section — Yume Psicologia
   Style: Green background with 3-step booking process
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect } from "react";
import { CheckCircle } from "lucide-react";

export default function Booking() {
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;
  const stepsRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    // Load jQuery first
    const jqueryScript = document.createElement("script");
    jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js";
    jqueryScript.async = true;
    document.head.appendChild(jqueryScript);

    jqueryScript.onload = () => {
      // Load Setmore FancyBox script
      const setmoreScript = document.createElement("script");
      setmoreScript.src = "/setmoreFancyBox.js";
      setmoreScript.async = true;
      document.body.appendChild(setmoreScript);
    };

    return () => {
      // Cleanup
      if (document.head.contains(jqueryScript)) {
        document.head.removeChild(jqueryScript);
      }
    };
  }, []);

  const steps = [
    {
      number: "01",
      title: "Escolha o profissional",
      description: "Selecione o terapeuta que melhor se alinha com suas necessidades e preferências.",
    },
    {
      number: "02",
      title: "Escolha a data e hora",
      description: "Visualize a disponibilidade e escolha o melhor horário para sua consulta.",
    },
    {
      number: "03",
      title: "Confirme seus dados",
      description: "Preencha seus dados de contato e confirme o agendamento da sua sessão.",
    },
  ];

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
            Agende sua sessão em 3 passos simples e rápidos.
          </p>
        </div>

        {/* 3 Steps */}
        <div ref={stepsRef} className="fade-up grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              {/* Step number with circle */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="font-display text-3xl font-light text-white">
                      {step.number}
                    </span>
                  </div>
                  {/* Connector line to next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 w-8 h-px bg-white/30" />
                  )}
                </div>
              </div>
              
              {/* Step content */}
              <h3 className="font-display text-xl font-light text-white mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm font-light text-white/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Setmore Booking Button with FancyBox Popup */}
        <div className="flex justify-center">
          <a
            id="Setmore_button_iframe"
            href="https://yumepsicologia.setmore.com/"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#8FBF8F] font-display text-lg font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Agendar agora
          </a>
        </div>
      </div>
    </section>
  );
}
