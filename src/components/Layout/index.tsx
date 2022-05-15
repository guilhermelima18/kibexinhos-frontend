import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Flex w="100%" maxW="1300px" flexDir="column" mx="auto" px="3">
      {children}
    </Flex>
  );
}
