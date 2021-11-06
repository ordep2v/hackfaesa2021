import { SeparatorTitle } from "../../../../shared-components/UI/SeparatorTitle";
import { Stepper } from "../../../../shared-components/UI/Stepper";

import { OurStepsContainer } from "./styles";

export const OurSteps = () => {
  return (
    <OurStepsContainer>
      <SeparatorTitle text="Passo a passo para a nossa solução" />
      <Stepper />
      <Stepper />
      <Stepper />
      <Stepper />
    </OurStepsContainer>
  );
};
