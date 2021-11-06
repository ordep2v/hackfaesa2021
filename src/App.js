import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";

import { HomeModule } from "./modules/Home";
import { SystemModule } from "./modules/System";

import { Navigation } from "./shared-components/UI/Navigation";
import { Footer } from "./shared-components/UI/Footer";

import { LandingPageContainer } from "./styles";

import bgImage from "./shared-components/Images/image-background.png";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <LandingPageContainer bgImage={bgImage}>
          <Navigation />
          <Route exact path="/" component={() => <HomeModule />} />
          <Route exact path="/system" component={() => <SystemModule />} />
          <Footer />
        </LandingPageContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
