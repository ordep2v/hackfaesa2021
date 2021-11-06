import { useState } from "react";

import { MakeDiff } from "./components/HomePage/MakeDiff";
import { StampProgress } from "./components/HomePage/StampProgress";

import { Tab } from "../../shared-components/UI/Tabs";

import { SystemContainer } from "./styles";

export const SystemModule = () => {
  const [systemTab, setSystemTab] = useState(0);

  const handleTabsChange = (index) => {
    setSystemTab(index);
  };

  const tabText = ["Início", "Objetivos", "Postar"];

  return (
    <SystemContainer>
      <Tab tabText={tabText} index={systemTab} onChange={handleTabsChange}>
        <StampProgress />
        <MakeDiff />
      </Tab>
    </SystemContainer>
  );
};
