import { Flex, Input, InputProps } from "@chakra-ui/react";

interface InputSearchProps extends InputProps {}

export function InputSearch({ ...rest }: InputSearchProps) {
  return (
    <Flex w="100%">
      <Input
        type="search"
        variant="outline"
        fontSize="0.9rem"
        color="orange.500"
        borderWidth="2px"
        _focus={{ borderColor: "orange.500", borderWidth: "2px" }}
        {...rest}
      />
    </Flex>
  );
}
