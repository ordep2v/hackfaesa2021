import "./App.css";

import { HomeModule } from "./modules/Home";

import { Navigation } from "./shared-components/UI/Navigation";
import { Footer } from "./shared-components/UI/Footer";

import { LandingPageContainer } from "./styles";

import bgImage from "./shared-components/Images/image-background.png";

function App() {
  return (
    <div className="App">
      <LandingPageContainer bgImage={bgImage}>
        <Navigation />
        <HomeModule />
        <Footer />
      </LandingPageContainer>
    </div>
  );
}

export default App;
