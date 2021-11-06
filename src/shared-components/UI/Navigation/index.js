import { Nav } from "./styles";

import { PlantusLogo } from "../../../config/company/Logo";

import { Button } from "../Button";

export const Navigation = () => {
  return (
    <Nav className="header-landing">
      <PlantusLogo />
      <Button text="Sou colaborador" />
    </Nav>
  );
};
