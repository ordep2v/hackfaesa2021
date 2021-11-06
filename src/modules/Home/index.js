import { HeroSection } from "./components/HeroSection";
import { OurClients } from "./components/OurClients";
import { OurSteps } from "./components/OurSteps";
import {HomeContainer} from './styles.js'
import { OurProduct } from "./components/OurProduct";
import { ContactUs } from "./components/ContactUs";

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
