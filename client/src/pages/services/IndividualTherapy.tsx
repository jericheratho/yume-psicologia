import ServiceDetail from "./ServiceDetail";

export default function IndividualTherapy() {
  return (
    <ServiceDetail
      title="Psicoterapia Individual"
      subtitle="Um espaço só seu"
      description="Um espaço seguro para falar do que está pesado, entender seus padrões e começar a agir diferente."
      longDescription={`A psicoterapia individual na Yume é um processo de autodescoberta e transformação. Através de um encontro semanal, você terá um espaço exclusivo para explorar suas emoções, conflitos e desejos sem julgamentos.

Nossa abordagem foca na compreensão dos seus padrões de comportamento e na construção de novas formas de lidar com a vida. Seja para tratar ansiedade, depressão, questões de relacionamento ou busca por propósito, estamos aqui para caminhar ao seu lado.

Trabalhamos com embasamento científico e uma escuta sensível, garantindo que cada sessão seja um passo em direção à sua saúde mental e equilíbrio emocional.`}
      benefits={[
        "Ambiente seguro e acolhedor",
        "Sigilo absoluto e ética profissional",
        "Foco na mudança de padrões",
        "Desenvolvimento de autoconhecimento",
        "Suporte em momentos de crise",
        "Flexibilidade de horários online"
      ]}
      image="https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?q=80&w=2070&auto=format&fit=crop"
      whatsappLink="http://bit.ly/4rwMSTN"
      whatsappLabel="Agendar sessão individual"
    />
  );
}
