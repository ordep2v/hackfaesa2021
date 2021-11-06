import { useState } from "react";

import {
  SectionHoverStep,
  SectionHoverIcon,
  SectionHoverText,
  SectionHoverStepNumber,
  SectionHoverStepDescription,
  SectionHoverStepTitle,
} from "./styles";

import { Smile } from "react-feather";

export function Stepper(props) {
  const [openBox, setOpenBox] = useState(false);

  return (
    <SectionHoverStep
      className="section-hover-step"
      onClick={(e) => setOpenBox(!openBox)}
    >
      <SectionHoverIcon className="section-hover-icon">
        <Smile size="2rem" />
      </SectionHoverIcon>
      <SectionHoverText className="section-hover-text">
        <SectionHoverStepNumber className="section-hover-step-number">
          1 passo
        </SectionHoverStepNumber>
        <SectionHoverStepTitle>Blablablablabla</SectionHoverStepTitle>
        {!!openBox && (
          <SectionHoverStepDescription>
            aidshaiuehsauiehaiuheu
          </SectionHoverStepDescription>
        )}
      </SectionHoverText>
    </SectionHoverStep>
  );
}
