import { useState } from "react";

import { MakeDiff } from "./components/HomePage/MakeDiff";
import { StampProgress } from "./components/HomePage/StampProgress";
import { CompaniesDoing } from "./components/HomePage/CompaniesDoing";
import { ObjectivesStampProgress } from "./components/Objectives/StampProgress";

import { SystemContainer, HomePageContainer } from "./styles";

import { Tab } from "../../shared-components/UI/Tabs";
import { PostComment } from "./components/PostComment";

export const SystemModule = () => {
  const [systemTab, setSystemTab] = useState(0);

  const handleTabsChange = (index) => {
    setSystemTab(index);
  };

  const tabText = ["Início", "Objetivos", "Postar"];

  return (
    <SystemContainer>
      <Tab
        tabText={tabText}
        index={systemTab}
        onChange={(index) => handleTabsChange(index)}
      >
        {systemTab === 0 && (
          <HomePageContainer>
            <StampProgress className="stamp" />
            <MakeDiff className="makediff" />
            <CompaniesDoing className="companies" />
          </HomePageContainer>
        )}
        {systemTab === 1 && (
          <HomePageContainer>
            <ObjectivesStampProgress />
          </HomePageContainer>
        )}
        {systemTab === 2 && (
          <HomePageContainer>
            <PostComment />
          </HomePageContainer>
        )}
      </Tab>
    </SystemContainer>
  );
};
