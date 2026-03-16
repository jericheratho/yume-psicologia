/* ============================================================
   Footer — Yume Psicologia
   Style: Dark ink background, editorial layout, legal info
   ============================================================ */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2A26] text-white/70 pt-16 pb-8">
      <div className="container">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl font-light text-white">Yume</span>
              <span className="text-[10px] font-body font-light tracking-[0.25em] uppercase text-white/40 mt-1">
                Psicologia
              </span>
            </div>
            <p className="font-body text-sm font-light text-white/50 leading-relaxed max-w-xs mb-5">
              Sonhos, acolhimento & muito afeto. Cuidado em saúde mental online
              para quem quer entender e transformar a própria história.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/yumepsicologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="Instagram Yume Psicologia"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white/80 transition-colors"
                aria-label="WhatsApp Yume Psicologia"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-60 hover:opacity-100 transition-opacity">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">
              Serviços
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                "Psicoterapia Individual",
                "Avaliação Neuropsicológica",
                "Terapia em Grupo",
                "Orientação & Acompanhamento",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="font-body text-sm font-light text-white/50 hover:text-white/80 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-4">
              Contato
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-light text-white/50 hover:text-white/80 transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/yumepsicologia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-light text-white/50 hover:text-white/80 transition-colors"
                >
                  @yumepsicologia
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@yumepsicologia.com.br"
                  className="font-body text-sm font-light text-white/50 hover:text-white/80 transition-colors"
                >
                  contato@yumepsicologia.com.br
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-body text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-3">
                Atendimento
              </h4>
              <p className="font-body text-sm font-light text-white/50">
                100% Online · Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="font-body text-xs font-light text-white/30">
                © {currentYear} Yume Psicologia. Todos os direitos reservados.
              </p>
              <p className="font-body text-xs font-light text-white/25">
                Yume Psicologia LTDA · CNPJ: 63.429.516/0001-76
              </p>
              <p className="font-body text-xs font-light text-white/25">
                Responsável Técnico: Ezequias Alves · CRP 03/24172
              </p>
            </div>
            <div className="flex flex-col gap-1 text-right">
              <p className="font-body text-xs font-light text-white/30">
                Adequação à LGPD (Lei 13.709/18)
              </p>
              <p className="font-body text-xs font-light text-white/25">
                Clínica credenciada · CRP 06/
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
