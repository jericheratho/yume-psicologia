/* ============================================================
   Team Section — Yume Psicologia
   Style: Editorial portrait layout, warm tones
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TEAM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/yume-team-8qyLoH2jgVXYBmPiwquYGZ.webp";

const team = [
  {
    name: "Hanna Silva",
    role: "Psicóloga Clínica",
    crp: "CRP 06/224832",
    approach: "Gestalt-terapia · TCC",
    bio: "Psicóloga com sólida experiência clínica em atendimentos online, fundamentada na Gestalt-terapia e em formação avançada em TCC, com atuação voltada a adultos e idosos, especialmente em demandas como luto, ansiedade e relações interpessoais.",
    specialties: ["Luto", "Ansiedade", "Relações interpessoais", "Adultos e idosos"],
    instagram: "https://www.instagram.com/psihannacsillva/",
  },
  {
    name: "Ezequias Alves",
    role: "Neuropsicólogo",
    crp: "CRP 03/24172",
    approach: "Neuropsicologia · Saúde Mental",
    bio: "Neuropsicólogo e especialista em Saúde Mental, com atuação em avaliação neuropsicológica, psicoterapia e perícias judiciais. Mestrando em Cultura e Sociedade na UFBA, desenvolvendo pesquisa sobre corpo, estética, literatura, processos psicossociais e subjetividade.",
    specialties: ["Avaliação Neuropsicológica", "TDAH", "TEA", "Perícias judiciais"],
    instagram: "https://www.instagram.com/ezequiaspsi/",
  },
];

export default function Team() {
  const headingRef = useScrollReveal(0.2) as React.RefObject<HTMLDivElement>;
  const contentRef = useScrollReveal(0.1) as React.RefObject<HTMLDivElement>;

  return (
    <section id="equipe" className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Section header */}
        <div ref={headingRef} className="fade-up mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-[#8FBF8F]" />
            <span className="font-body text-xs font-light tracking-[0.3em] uppercase text-[#8FBF8F]">
              Nossa equipe
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2A26] max-w-lg leading-tight">Conheça quem vai{" "}
              <em className="italic text-[#8FBF8F]">cuidar de você</em>
            </h2>
            <p className="font-body text-sm font-light text-[#4A4640] max-w-xs leading-relaxed">
              Profissionais dedicados a entender a sua singularidade.
            </p>
          </div>
        </div>

        {/* Team layout: image left, cards right */}
        <div ref={contentRef} className="fade-up grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left: team photo */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={TEAM_IMAGE}
                alt="Equipe Yume Psicologia"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#8FBF8F]/20 rounded-sm -z-10" />
          </div>

          {/* Right: team cards */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="p-7 bg-white/60 border border-[#2C2A26]/10 hover:border-[#7A8C7E]/40 hover:shadow-md transition-all duration-300 rounded-sm"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-[#2C2A26]">
                      {member.name}
                    </h3>
                    <p className="font-body text-sm font-light text-[#8FBF8F] mt-0.5">
                      {member.role} · {member.crp}
                    </p>
                  </div>
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

                {/* Approach tag */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#8FBF8F]/10 text-[#8FBF8F] font-body text-xs font-light tracking-wide rounded-sm">
                    {member.approach}
                  </span>
                </div>

                {/* Bio */}
                <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed mb-5">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 border border-[#2C2A26]/10 text-[#4A4640] font-body text-xs font-light rounded-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-5 pt-5 border-t border-[#2C2A26]/10">
                  <a
                    href={`https://wa.me/5511999999999?text=Olá%2C+gostaria+de+agendar+uma+consulta+com+${encodeURIComponent(member.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-light text-[#8FBF8F] hover:text-[#6B9B6B] transition-colors underline underline-offset-4"
                  >
                    Falar com {member.name.split(" ")[0]} →
                  </a>
                </div>
              </div>
            ))}

            {/* Join the team */}
            <div className="p-6 border border-dashed border-[#7A8C7E]/40 rounded-sm text-center">
              <p className="font-body text-sm font-light text-[#4A4640] mb-3">
                Quer fazer parte do time de profissionais da Yume?
              </p>
              <a
                href="mailto:contato@yumepsicologia.com.br"
                className="font-body text-sm font-medium text-[#7A8C7E] hover:text-[#5A6B5E] transition-colors"
              >
                Candidate-se →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
