import { useState } from "react";

import { MakeDiff } from "./components/HomePage/MakeDiff";
import { StampProgress } from "./components/HomePage/StampProgress";
import { CompaniesDoing } from "./components/CompaniesDoing";

import { SystemContainer } from "./styles";

import { Tab } from "../../shared-components/UI/Tabs";

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
        <CompaniesDoing />
      </Tab>
    </SystemContainer>
  );
};
