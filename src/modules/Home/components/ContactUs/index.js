import { SeparatorTitle } from "../../../../shared-components/UI/SeparatorTitle";
import { Paragraph } from "../../../../shared-components/UI/Paragraph";
import { Input } from "../../../../shared-components/UI/Input";
import { Button } from "../../../../shared-components/UI/Button";

import { ContactUsContainer, ContactUsForm } from "./styles";

export const ContactUs = ({ formContent }) => {
  return (
    <>
      <ContactUsContainer>
        <SeparatorTitle text="Entre em contato e agende uma consultoria" />
        <Paragraph text="Estamos prontos para te atender a qualquer momento" />
        <ContactUsForm>
          {formContent.map(({ content }) => (
            <Input
              key={content}
              placeholder={content}
              size="lg"
              variant="outline"
            />
          ))}
          <Button text="Enviar" type="submit" />
        </ContactUsForm>
      </ContactUsContainer>
    </>
  );
};
