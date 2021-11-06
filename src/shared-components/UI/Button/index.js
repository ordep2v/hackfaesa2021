import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ text, variant }) => {
  return (
    <ChakraButton colorScheme="blue" variant={variant}>
      {text}
    </ChakraButton>
  );
};
