import { ForwardRefRenderFunction, forwardRef, ReactNode } from "react";
import { Box, Flex, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface InputGroupProps extends InputProps {
  boxWidth?: string;
  fontSize?: string;
  inputType: string;
  inputName: string;
  labelText: string;
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
        borderColor="gray.200"
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
        <Input
          ref={ref}
          type={inputType}
          name={inputName}
          border="none"
          fontSize={fontSize}
          _focus={{ border: "none" }}
          {...rest}
        />
      </Flex>
    </Box>
  );
};

export const InputGroup = forwardRef(InputGroupBase);
