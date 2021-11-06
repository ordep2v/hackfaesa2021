import {
  Accordion as AccordionComponent,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { Paragraph } from "../Paragraph";

export const Accordion = ({ content }) => {
  return (
    <AccordionComponent allowToggle>
      {content.map((content) => (
        <AccordionItem key={content.title}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                <Paragraph text={content.title} />
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Paragraph text={content.content} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </AccordionComponent>
  );
};
