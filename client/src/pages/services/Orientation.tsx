import ServiceDetail from "./ServiceDetail";

export default function Orientation() {
  return (
    <ServiceDetail
      title="Orientação & Acompanhamento"
      subtitle="Direção em momentos difíceis"
      description="Para momentos de decisão, crise ou situações específicas que precisam de direção qualificada."
      longDescription={`A vida nos apresenta encruzilhadas que, por vezes, exigem mais do que apenas reflexão: exigem orientação técnica e estratégica. Este serviço da Yume é voltado para questões pontuais que necessitam de uma intervenção direta e qualificada.

Seja uma transição de carreira, uma crise familiar específica ou suporte a profissionais e estudantes de psicologia, oferecemos um acompanhamento focado na resolução e no suporte prático.

Diferente da psicoterapia de longo prazo, a orientação busca clareza imediata e ferramentas para lidar com o "aqui e agora" de forma eficiente e saudável.`}
      benefits={[
        "Foco na resolução de conflitos",
        "Suporte em transições de vida",
        "Orientação para profissionais",
        "Intervenção em crises pontuais",
        "Estratégias de enfrentamento",
        "Atendimento objetivo e direcionado"
      ]}
      image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2070&auto=format&fit=crop"
      whatsappLink="http://bit.ly/4aOYdqZ"
      whatsappLabel="Solicitar orçamento"
    />
  );
}
