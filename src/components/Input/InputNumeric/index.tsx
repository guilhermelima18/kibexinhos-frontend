/* eslint-disable react/no-children-prop */
import {
  Flex,
  FormLabel,
  forwardRef,
  Input as ChakraInput,
  InputProps,
  Text,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";
import { FieldError } from "react-hook-form";

interface FormInputGroupProps extends InputProps {
  labelText: string;
  inputName: string;
  inputType: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  FormInputGroupProps
> = ({ inputName, inputType, labelText, error = null, ...rest }, ref) => {
  return (
    <Flex as="main" w="100%" flexDir="column" my="5">
      <FormLabel htmlFor={inputName} fontSize="0.9rem">
        {labelText}
      </FormLabel>
      <ChakraInput
        type={inputType}
        name={inputName}
        fontSize="0.9rem"
        borderColor="gray.300"
        ref={ref}
        {...rest}
      />
      {error && (
        <Text fontSize="sm" color="red.500">
          {error.message}
        </Text>
      )}
    </Flex>
  );
};

export const InputNumeric = forwardRef(InputBase);
