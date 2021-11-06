import { Nav } from "./styles";

import { PlantusLogo } from "../../../config/company/Logo";

import { Button } from "../Button";
import { Link } from "react-router-dom";
import { Bell } from "react-feather";

export const Navigation = (props) => {
  return (
    <Nav className="header-landing">
      <Link to="/">
        <PlantusLogo />
      </Link>
      <Link to="/system">
        {props.innerNav ? (
          <Button text="Sou colaborador" />
        ) : (
          <Bell color="black" size="1.6rem" />
        )}
      </Link>
    </Nav>
  );
};
