import { HeroSection } from "./components/HeroSection";
import { OurClients } from "./components/OurClients";
import { OurSteps } from "./components/OurSteps";
import { OurProduct } from "./components/OurProduct";
import { ContactUs } from "./components/ContactUs";

import { HomeContainer } from "./styles.js";

const ContactUsFormDetails = [
  { content: "Nome" },
  { content: "Telefone" },
  { content: "Empresa" },
  { content: "Email" },
];

export const HomeModule = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <OurClients />
      <OurSteps />
      <OurProduct />
      <ContactUs formContent={ContactUsFormDetails} />
    </HomeContainer>
  );
};
