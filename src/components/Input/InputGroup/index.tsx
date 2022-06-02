import { ForwardRefRenderFunction, forwardRef, ReactNode } from "react";
import { Box, Flex, FormLabel, Input, InputProps } from "@chakra-ui/react";
import InputMask from "react-input-mask";

interface InputGroupProps extends InputProps {
  boxWidth?: string;
  fontSize?: string;
  inputType: string;
  inputName: string;
  labelText: string;
  mask?: string;
  children?: ReactNode;
}

const InputGroupBase: ForwardRefRenderFunction<
  HTMLInputElement,
  InputGroupProps
> = (
  {
    boxWidth = "100%",
    fontSize = "0.9rem",
    inputName,
    inputType,
    labelText,
    children,
    mask,
    ...rest
  },
  ref
) => {
  return (
    <Box w={boxWidth} display="flex" flexDir="column" mb="5">
      <FormLabel htmlFor={inputName} fontSize={fontSize}>
        {labelText}
      </FormLabel>
      <Flex
        w="100%"
        border="1px solid"
        borderColor="gray.400"
        _focusWithin={{ border: "2px solid", borderColor: "#DD6B20" }}
        borderRadius="md"
      >
        {children && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRight="1px solid"
            borderColor="gray.200"
            px="3"
          >
            {children}
          </Box>
        )}
        {mask ? (
          <Input
            as={InputMask}
            mask={mask}
            maskChar={null}
            type={inputType}
            id={inputName}
            name={inputName}
            border="none"
            fontSize={fontSize}
            ref={ref}
            _focus={{ border: "none" }}
            {...rest}
          />
        ) : (
          <Input
            type={inputType}
            id={inputName}
            name={inputName}
            border="none"
            fontSize={fontSize}
            ref={ref}
            _focus={{ border: "none" }}
            {...rest}
          />
        )}
      </Flex>
    </Box>
  );
};

export const InputGroup = forwardRef(InputGroupBase);
