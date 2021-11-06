import { HeroSection } from "./components/HeroSection";
import { OurClients } from "./components/OurClients";
import { OurSteps } from "./components/OurSteps";
import {HomeContainer} from './styles.js'

export const HomeModule = () => {
  return (
    <HomeContainer>
      <HeroSection />
      <OurClients />
      <OurSteps />
    </HomeContainer>
  );
};
