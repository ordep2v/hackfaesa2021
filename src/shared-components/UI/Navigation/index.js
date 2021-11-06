import { Nav } from "./styles";

import { Button } from "../Button";

export const Navigation = () => {
  return (
    <Nav className="header-landing">
      <img
        src="https://res.cloudinary.com/dtqaoxaot/image/upload/v1636160404/Hack%20Faesa%202021/Group_1_tyelge.svg"
        alt="Logo Plantus"
      />
      <Button text="Sou colaborador" variant="outline" />
    </Nav>
  );
};
