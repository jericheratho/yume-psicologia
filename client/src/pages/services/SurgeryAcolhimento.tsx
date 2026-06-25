import ServiceDetail from "./ServiceDetail";

export default function SurgeryAcolhimento() {
  return (
    <ServiceDetail
      title="Acolhimento & Avaliação para Cirurgias"
      subtitle="Procedimentos Estéticos"
      description="Suporte emocional e avaliação psicológica especializada para quem busca segurança em procedimentos estéticos."
      longDescription={`Realizar uma cirurgia ou procedimento estético é uma decisão que envolve não apenas o corpo, mas também a mente. Na Yume, oferecemos um suporte especializado para ajudar você a navegar por este momento com tranquilidade e clareza.

Nosso foco é entender suas expectativas, motivações e preparar seu emocional para o pré e pós-operatório. Atuamos em parceria com cirurgiões para garantir que o paciente esteja em plenas condições psicológicas para o procedimento, minimizando riscos de frustrações ou complicações emocionais.

Para mais informações detalhadas sobre este serviço específico, você também pode visitar nossos portais dedicados: estetica.yumepsicologia.com.br e cirurgias.yumepsicologia.com.br.`}
      benefits={[
        "Preparação emocional pré-operatória",
        "Avaliação de expectativas reais",
        "Suporte no pós-operatório",
        "Laudo psicológico para cirurgias",
        "Foco na autoimagem e autoestima",
        "Parceria com cirurgiões especialistas"
      ]}
      image="https://d2xsxph8kpxj0f.cloudfront.net/310519663443647826/fadj7bBwwHboDxncWj7Nu6/YumePsicologia(1)_240ca9b3.png"
      whatsappLink="https://estetica.yumepsicologia.com.br/"
      whatsappLabel="Saiba mais sobre Estética"
    />
  );
}
