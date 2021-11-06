import { Paragraph } from "../../../../shared-components/UI/Paragraph";
import { OurClientsContainer, OurClientsImage } from "./styles";

export const OurClients = () => {
  return (
    <OurClientsContainer>
      <Paragraph text="Nossa solução é utilizada em mais de 1,000 empresas" />
      <OurClientsImage
        src="https://res.cloudinary.com/dtqaoxaot/image/upload/v1636175364/Hack%20Faesa%202021/Infly_SHANGA_AGUIA_NEGRA_ATHENASADDERENCIA_pcjwti.png"
        alt="Nossas empresas"
      />
      <Paragraph text=" Tudo o que você precisa para levar a sua empresa para uma sociedade responsável." />
    </OurClientsContainer>
  );
};
