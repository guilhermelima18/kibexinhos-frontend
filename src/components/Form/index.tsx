import { ReactNode } from "react";
import { FormControl, FormControlProps } from "@chakra-ui/react";

interface FormProps extends FormControlProps {
  children: ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return (
    <FormControl as="form" {...props}>
      {children}
    </FormControl>
  );
}
