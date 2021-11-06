import { FooterContainer } from "./styles";

import { PlantusLogo } from "../../../config/company/Logo";
import { Paragraph } from "../Paragraph";

export const Footer = () => {
  return (
    <FooterContainer>
      <PlantusLogo />
      <Paragraph text="Colaborando para um mundo mais unido" />
      <Paragraph text="CNPJ 21329321851" />
    </FooterContainer>
  );
};
