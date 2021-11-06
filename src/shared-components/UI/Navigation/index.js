import { Nav } from "./styles";

import { PlantusLogo } from "../../../config/company/Logo";

import { Button } from "../Button";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Nav className="header-landing">
      <Link to="/">
        <PlantusLogo />
      </Link>
      <Link to="/system">
        <Button text="Sou colaborador" />
      </Link>
    </Nav>
  );
};
