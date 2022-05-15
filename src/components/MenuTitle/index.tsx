import { Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type MenuTitleProps = {
  title: string;
  children?: ReactNode;
};

export const MenuTitle = ({ title, children }: MenuTitleProps) => {
  return (
    <Flex
      bg="white"
      w="100%"
      h="80px"
      alignItems="center"
      justifyContent="space-between"
      p="5"
    >
      <Heading fontSize="1.4rem" color="gray.600">
        {title}
      </Heading>
      {children}
    </Flex>
  );
};
