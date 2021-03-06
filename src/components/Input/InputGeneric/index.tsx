import { ForwardRefRenderFunction, forwardRef } from "react";
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  inputName: string;
  inputType: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { inputName, inputType, ...rest },
  ref
) => {
  return (
    <ChakraInput
      type={inputType}
      name={inputName}
      fontSize="0.9rem"
      ref={ref}
      {...rest}
    />
  );
};

export const InputGeneric = forwardRef(InputBase);
