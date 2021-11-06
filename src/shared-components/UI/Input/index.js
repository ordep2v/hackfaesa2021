import { Input as InputComponent } from "@chakra-ui/react";

export const Input = ({ placeholder = "Digite aqui", size, variant }) => {
  return (
    <InputComponent placeholder={placeholder} size={size} variant={variant} />
  );
};
