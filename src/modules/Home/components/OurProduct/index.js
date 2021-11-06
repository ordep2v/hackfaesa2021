import { SeparatorTitle } from "../../../../shared-components/UI/SeparatorTitle";

import { OurProductContainer, OurProductImage } from "./styles";

export const OurProduct = () => {
  return (
    <OurProductContainer>
      <SeparatorTitle
        text="Receba pontuações de acordo com o seu trabalho e compartilhe com
          outras empresas"
      />
      <OurProductImage
        src="https://res.cloudinary.com/dtqaoxaot/image/upload/v1636169693/Hack%20Faesa%202021/pessoa_thxtz5.svg"
        alt="Usuário utilizando nosso produto"
      />
    </OurProductContainer>
  );
};
