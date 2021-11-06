import {
  Tabs,
  Tab as TabComponent,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";

export const Tab = ({ children, tabText }) => {
  return (
    <>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          {tabText.map((tabText) => (
            <TabComponent>{tabText}</TabComponent>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>{children}</TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
