import {
  Tabs,
  Tab as TabComponent,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

export const Tab = ({ children, tabText, onChange, index }) => {
  return (
    <>
      <Tabs
        variant="soft-rounded"
        colorScheme="green"
        index={index}
        onChange={onChange}
      >
        <TabList>
          {tabText.map((tabText) => (
            <TabComponent>{tabText}</TabComponent>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>{children}</TabPanel>
          <TabPanel>{children}</TabPanel>
          <TabPanel>{children}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
