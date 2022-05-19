import { ForwardRefRenderFunction, forwardRef, ReactNode } from "react";
import {
  Box,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  inputName: string;
  inputType: string;
  labelText?: string;
  children?: ReactNode;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { inputName, inputType, labelText, children, ...rest },
  ref
) => {
  return (
    <Box>
      <FormLabel>{labelText}</FormLabel>
      <Box
        display="flex"
        alignItems="center"
        borderRadius="md"
        px="3"
        border="1px solid"
        borderColor="gray.400"
        _focusWithin={{ borderColor: "orange.500", borderWidth: "2px" }}
      >
        <span
          style={{
            paddingRight: "10px",
            borderRight: "1px solid rgba(200, 200, 200, 0.9)",
          }}
        >
          {children}
        </span>
        <ChakraInput
          type={inputType}
          name={inputName}
          fontSize="0.9rem"
          borderColor="gray.300"
          ref={ref}
          {...rest}
        />
      </Box>
    </Box>
  );
};

export const Input = forwardRef(InputBase);
