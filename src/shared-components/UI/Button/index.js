import { Button as ChakraButton } from "@chakra-ui/react";

export const Button = ({ text, variant, onClick }) => {
  return (
    <ChakraButton colorScheme="blue" variant={variant} onClick={onClick}>
      {text}
    </ChakraButton>
  );
};
