import { HeroContainer, HeroParagraph, HeroTitle, HeroImage, HeroContent, HeroImageDivision} from "./styles";
import { Button } from "../../../../shared-components/UI/Button";

export const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Unidos por um mundo melhor</HeroTitle>
        <HeroParagraph>
          Compartilhe ideias e soluções em prol de uma sociedade com
          responsabilidade ecológica. De forma facilitada e acessível
        </HeroParagraph>
        <Button text="Conheça agora" variant="solid"/>
      </HeroContent>
      <HeroImageDivision>
        <HeroImage
          src="https://res.cloudinary.com/dtqaoxaot/image/upload/v1636160404/Hack%20Faesa%202021/garota_cf0j6e.svg"
          alt="Imagem de mulher segurando globo"
        />
      </HeroImageDivision>
    </HeroContainer>
  );
};