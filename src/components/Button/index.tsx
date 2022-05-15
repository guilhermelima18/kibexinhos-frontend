import { ReactNode } from "react";
import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <ChakraButton fontSize="0.9rem" {...rest}>
      {children}
    </ChakraButton>
  );
}
