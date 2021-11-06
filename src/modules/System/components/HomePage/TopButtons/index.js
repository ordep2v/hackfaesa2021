import { Button } from "../../../../shared-components/UI/Button";

import { TopButtonsContainer } from "./styles";

export const TopButtons = () => {
  return (
    <>
      <TopButtonsContainer>
        <Button text="Início" />
        <Button text="Objetivos" />
        <Button text="Postar" variant="solid" />
      </TopButtonsContainer>
    </>
  );
};
