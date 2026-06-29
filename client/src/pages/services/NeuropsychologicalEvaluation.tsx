import ServiceDetail from "./ServiceDetail";

export default function NeuropsychologicalEvaluation() {
  return (
    <ServiceDetail
      title="Avaliação Neuropsicológica"
      subtitle="Investigação com cuidado"
      description="Investigação responsável e humanizada para diagnóstico de TDAH, TEA, Altas Habilidades e outros."
      longDescription={`A Avaliação Neuropsicológica é um processo detalhado que busca compreender o funcionamento cognitivo, emocional e comportamental do indivíduo. Na Yume, realizamos este processo com o máximo de rigor técnico e sensibilidade humana.

Através de testes validados, entrevistas e observações clínicas, investigamos funções como atenção, memória, linguagem, funções executivas e inteligência. O objetivo é fornecer um mapeamento claro que auxilie no diagnóstico e no planejamento de intervenções.

Este serviço é fundamental para quem busca entender dificuldades de aprendizagem, suspeitas de transtornos do neurodesenvolvimento ou deseja um laudo clínico detalhado para fins médicos ou escolares.`}
      benefits={[
        "Diagnóstico diferencial preciso",
        "Mapeamento de funções cognitivas",
        "Laudo clínico detalhado",
        "Orientação pós-avaliação",
        "Testes padrão ouro",
        "Abordagem humanizada"
      ]}
      image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1920&auto=format&fit=crop"
      whatsappLink="http://bit.ly/4tPDjR6"
      whatsappLabel="Conheça a Avaliação"
    />
  );
}
