import { SeparatorTitle } from "../../../../shared-components/UI/SeparatorTitle";
import { Accordion } from "../../../../shared-components/UI/Accordion";

import { OurStepsContainer, StepsContainer } from "./styles";

const content = [
  {
    title: "Nossa história",
    content:
      "A PlantÜs é uma empresa internacional, fundada no ano de 2015 por um grupo de desenvolveres, que partilharam uma solução comum em prol da sustentabilidade ecológica. Nos últimos anos ganhou notoriedade, expandindo sua atuação ao cenário Nacional, levando para os outros Estados sua forma diferenciada de atuar no cenário de sustentabilidade ecológica trazendo soluções sustentáveis aos parceiros. Trabalhando de forma B2B tem tido grandes resultados de cooperação com outras empresas.",
  },
  {
    title: "Nossa missão",
    content:
      "A PlantÜs é um sistema que modela um plano sustentável e ecológico, para empresas sendo elas micros ou grandes empresas, trabalhando de forma cooperativa entre os parceiros, tornando assim um mundo melhor.",
  },
  {
    title: "Nossa solução",
    content:
      "A nossa solução é baseada em um sistema no qual temos como o principal objetivo a sustentabilidade ecológica do mundo, tendo objetivos e conquistas a partir da conclusão dos objetivos. Tendo em vista grandes problemas climáticos, naturais adotamos uma forma colaborativa e intuitiva das empresas trabalharem em colaboração para tornar não só o ambiente de trabalho mais sustentável, mas sim o mundo.",
  },
];

export const OurSteps = () => {
  return (
    <OurStepsContainer>
      <SeparatorTitle text="Passo a passo para a nossa solução" />
      <StepsContainer>
        <Accordion content={content} />
      </StepsContainer>
    </OurStepsContainer>
  );
};
