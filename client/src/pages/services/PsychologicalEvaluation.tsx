import ServiceDetail from "./ServiceDetail";

export default function PsychologicalEvaluation() {
  return (
    <ServiceDetail
      title="Avaliação Psicológica"
      subtitle="Compreensão profunda"
      description="Um processo técnico e científico para identificar demandas emocionais, de personalidade e saúde mental."
      longDescription={`A Avaliação Psicológica na Yume é um procedimento clínico realizado com o objetivo de identificar, descrever e compreender questões emocionais e de personalidade. É um recurso valioso tanto para autoconhecimento quanto para fins legais, médicos ou profissionais.

Utilizamos uma combinação de entrevistas clínicas, observações e instrumentos psicológicos reconhecidos pelo CFP para fornecer um panorama claro sobre o funcionamento psíquico do indivíduo. 

Seja para um diagnóstico de saúde mental, orientação vocacional ou suporte a tratamentos médicos, nossa avaliação é conduzida com ética, rigor técnico e um olhar humanizado sobre a história de cada pessoa.`}
      benefits={[
        "Mapeamento de traços de personalidade",
        "Identificação de demandas emocionais",
        "Suporte para diagnósticos médicos",
        "Laudo psicológico fundamentado",
        "Orientação para tratamento",
        "Processo ético e sigiloso"
      ]}
      image="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=2070&auto=format&fit=crop"
      whatsappLink="http://bit.ly/4tPDjR6"
      whatsappLabel="Solicitar Avaliação Psicológica"
    />
  );
}
