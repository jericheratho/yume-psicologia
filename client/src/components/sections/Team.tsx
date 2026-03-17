/* ============================================================
   Team Section — Yume Psicologia
   Style: Editorial asymmetrical layout, elegant spacing
   Inspired by: Amelie's Advice about page
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TEAM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/YumePsicologia_9413ce0b.webp";
const HANNA_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/image_3be8b5f2.png";
const EZEQUIAS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/IMG_4686_3bf22361.jpg";

const team = [
  {
    name: "Hanna Silva",
    role: "Psicóloga Clínica",
    crp: "CRP 06/224832",
    approach: "Gestalt-terapia · TCC",
    bio: "Psicóloga com sólida experiência clínica em atendimentos online, fundamentada na Gestalt-terapia e em formação avançada em TCC, com atuação voltada a adultos e idosos, especialmente em demandas como luto, ansiedade e relações interpessoais.",
    specialties: ["Luto", "Ansiedade", "Relações interpessoais", "Adultos e idosos"],
    instagram: "https://www.instagram.com/psihannacsillva/",
    photo: HANNA_IMAGE,
  },
  {
    name: "Ezequias Alves",
    role: "Neuropsicólogo",
    crp: "CRP 03/24172",
    approach: "Neuropsicologia · Saúde Mental",
    bio: "Neuropsicólogo e especialista em Saúde Mental, com atuação em avaliação neuropsicológica, psicoterapia e perícias judiciais. Mestrando em Cultura e Sociedade na UFBA, desenvolvendo pesquisa sobre corpo, estética, literatura, processos psicossociais e subjetividade.",
    specialties: ["Avaliação Neuropsicológica", "TDAH", "TEA", "Perícias judiciais"],
    instagram: "https://www.instagram.com/ezequiaspsi/",
    photo: EZEQUIAS_IMAGE,
  },
];

export default function Team() {
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section id="equipe" className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8FBF8F]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#8FBF8F]">
              Nossa equipe
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] max-w-2xl leading-tight">
            Conheça quem vai <em className="italic text-[#8FBF8F]">cuidar de você</em>
          </h2>
        </div>



        {/* Team members - asymmetrical layout */}
        <div className="space-y-24 md:space-y-32">
          {team.map((member, index) => (
            <div key={member.name}>
              {/* Alternating layout: image left/right */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center p-8 md:p-12 bg-white rounded-sm shadow-lg ${index === 1 ? "md:grid-cols-2" : ""}`}>
                {/* Image - left on odd, right on even */}
                <div className={`${index === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content - right on odd, left on even */}
                <div className={`${index === 1 ? "md:order-1" : ""} flex flex-col justify-center`}>
                  {/* Name as large italic heading */}
                  <h3 className="font-display text-4xl md:text-5xl font-light italic text-[#2C2A26] mb-6">
                    {member.name}
                  </h3>

                  {/* Role and credentials */}
                  <div className="mb-8">
                    <p className="font-body text-sm font-light text-[#8FBF8F] tracking-wide uppercase mb-1">
                      {member.role}
                    </p>
                    <p className="font-body text-xs font-light text-[#8FBF8F]/70">
                      {member.crp}
                    </p>
                  </div>

                  {/* Approach tag */}
                  <div className="mb-8">
                    <span className="inline-block px-4 py-2 bg-[#8FBF8F]/10 text-[#8FBF8F] font-body text-xs font-light tracking-wide rounded-sm">
                      {member.approach}
                    </span>
                  </div>

                  {/* Bio */}
                  <p className="font-body text-base font-light text-[#4A4640] leading-relaxed mb-8">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-8">
                    <p className="font-body text-xs font-light text-[#8FBF8F] tracking-wide uppercase mb-3">
                      Especialidades
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1.5 border border-[#2C2A26]/10 text-[#4A4640] font-body text-xs font-light rounded-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA and social */}
                  <div className="flex items-center gap-6 pt-6 border-t border-[#2C2A26]/10">
                    <a
                      href="https://wa.me/message/YJ74EWIKNVCGA1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm font-light text-[#8FBF8F] hover:text-[#6B9B6B] transition-colors underline underline-offset-4"
                    >
                      Agendar consulta →
                    </a>
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#8FBF8F] hover:text-[#6B9B6B] transition-colors"
                      aria-label={`Instagram de ${member.name}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team section */}
        <div className="mt-24 md:mt-32 pt-24 md:pt-32 border-t border-[#2C2A26]/10">
          <div className="max-w-2xl">
            <p className="font-body text-sm font-light text-[#8FBF8F] tracking-wide uppercase mb-4">
              Quer fazer parte do time?
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-light text-[#2C2A26] mb-6">
              Estamos sempre buscando profissionais dedicados
            </h3>
            <p className="font-body text-base font-light text-[#4A4640] mb-8">
              Se você é um profissional de saúde mental apaixonado por fazer a diferença, gostaríamos de ouvir você.
            </p>
            <a
              href="mailto:yumepsicologia@gmail.com"
              className="inline-block px-6 py-3 bg-[#8FBF8F] text-white font-body text-sm font-light hover:bg-[#6B9B6B] transition-colors rounded-sm"
            >
              Candidate-se →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
