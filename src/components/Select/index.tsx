import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import {
  Select as ChakraSelect,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";

interface SelectProps extends ChakraSelectProps {
  children: ReactNode;
  value: number;
  setValue: Dispatch<SetStateAction<number>>;
}

export const Select = ({ value, setValue, children, ...rest }: SelectProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <ChakraSelect
      h="40px"
      fontSize="0.9rem"
      borderWidth="2px"
      _focus={{ borderColor: "orange.500", borderWidth: "2px" }}
      value={value}
      onChange={handleChange}
      {...rest}
    >
      {children}
    </ChakraSelect>
  );
};
