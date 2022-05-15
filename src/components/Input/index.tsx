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
      borderColor="gray.300"
      ref={ref}
      {...rest}
    />
  );
};

export const Input = forwardRef(InputBase);
