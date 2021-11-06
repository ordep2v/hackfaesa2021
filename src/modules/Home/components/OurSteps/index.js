import { SeparatorTitle } from "../../../../shared-components/UI/SeparatorTitle";
import { Stepper } from "../../../../shared-components/UI/Stepper";

import { OurStepsButtons, OurStepsContainer } from "./styles";

export const OurSteps = () => {
  return (
    <OurStepsContainer>
      <SeparatorTitle text="Passo a passo para a nossa solução" />
      <OurStepsButtons>
      <Stepper />
      <Stepper />
      <Stepper />
      <Stepper />
      </OurStepsButtons>
    </OurStepsContainer>
  );
};
