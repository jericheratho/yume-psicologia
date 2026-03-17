/* ============================================================
   Team Section — Yume Psicologia
   Style: Clean card layout with rounded corners, sage green accents
   ============================================================ */
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HANNA_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/image_c7eaa558.png";
const EZEQUIAS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/IMG_4686_f49fce05.jpg";

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

        {/* Team cards grid */}
        <div ref={contentRef} className="fade-up grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              {/* Photo section with rounded top corners */}
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name banner - sage green background */}
              <div className="bg-[#8FBF8F] px-6 py-6 text-center">
                <h3 className="font-display text-2xl md:text-3xl font-light text-white">
                  {member.name}
                </h3>
              </div>

              {/* Content section */}
              <div className="flex-1 p-6 md:p-8 flex flex-col">
                {/* CRP and role */}
                <div className="mb-6">
                  <p className="font-body text-sm font-light text-[#8FBF8F] tracking-wide mb-1">
                    {member.crp}
                  </p>
                  <p className="font-body text-sm font-light text-[#4A4640]">
                    {member.role}
                  </p>
                </div>

                {/* Bio description */}
                <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="mb-6">
                  <p className="font-body text-xs font-medium text-[#8FBF8F] tracking-wide uppercase mb-3">
                    Especialidades
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block px-3 py-1 bg-[#8FBF8F]/10 text-[#8FBF8F] font-body text-xs font-light rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="mt-auto flex gap-3">
                  <a
                    href="https://wa.me/message/YJ74EWIKNVCGA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-[#8FBF8F] text-white font-body text-sm font-medium rounded-lg hover:bg-[#6B9B6B] transition-colors duration-300 text-center"
                  >
                    Agendar
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 border border-[#8FBF8F] text-[#8FBF8F] font-body text-sm font-medium rounded-lg hover:bg-[#8FBF8F]/5 transition-colors duration-300 text-center"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join the team section */}
        <div className="mt-20 md:mt-28 p-8 md:p-12 bg-[#F9F8F6] rounded-2xl text-center">
          <h3 className="font-display text-2xl md:text-3xl font-light text-[#2C2A26] mb-4">
            Quer fazer parte da equipe?
          </h3>
          <p className="font-body text-sm font-light text-[#4A4640] mb-6 max-w-2xl mx-auto">
            Estamos sempre em busca de profissionais apaixonados por saúde mental e cuidado humanizado.
          </p>
          <a
            href="mailto:yumepsicologia@gmail.com"
            className="inline-block px-6 py-3 bg-[#8FBF8F] text-white font-body text-sm font-medium rounded-lg hover:bg-[#6B9B6B] transition-colors duration-300"
          >
            Enviar candidatura
          </a>
        </div>
      </div>
    </section>
  );
}
