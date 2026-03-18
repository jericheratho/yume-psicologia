/* ============================================================
   Team Section — Yume Psicologia
   Style: Side-by-side card layout with photos, clean typography
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

        {/* Team cards grid - side by side layout */}
        <div ref={contentRef} className="fade-up w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col">
                {/* Title and subtitle */}
                <div className="mb-8">
                  <h3 className="font-display text-3xl md:text-4xl font-light text-[#2C2A26] mb-2 leading-tight">
                    {member.name}
                  </h3>
                  <p className="font-body text-lg font-light text-[#8FBF8F]">
                    {member.role}
                  </p>
                </div>

                {/* Photo with rounded corners */}
                <div className="mb-8 rounded-3xl overflow-hidden shadow-lg h-96 lg:h-[480px]">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CRP */}
                <p className="font-body text-sm font-light text-[#8FBF8F] tracking-wide mb-4">
                  {member.crp}
                </p>

                {/* Bio description */}
                <p className="font-body text-sm font-light text-[#4A4640] leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Specialties */}
                <div className="mb-8">
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
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/message/YJ74EWIKNVCGA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-3 bg-[#8FBF8F] text-white font-body text-sm font-medium rounded-lg hover:bg-[#6B9B6B] transition-colors duration-300 text-center"
                  >
                    {member.name === "Hanna Silva" ? "Falar com Hanna" : "Falar com Ezequias"}
                  </a>
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-[#8FBF8F]/10 text-[#8FBF8F] font-body text-sm font-medium rounded-lg hover:bg-[#8FBF8F]/20 transition-colors duration-300 flex items-center justify-center"
                    title="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
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
