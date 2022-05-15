import { ReactNode } from "react";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import { SideMenuDashboard } from "../SideMenuDashboard";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const isLessThan460 = useMediaQuery("(max-width: 460px)");

  return (
    <Flex w="100%" position="relative">
      <SideMenuDashboard />
      <Flex
        w={isLessThan460 ? "calc(100% - 40px)" : "calc(100% - 80px)"}
        flexDir="column"
        position="absolute"
        left={isLessThan460 ? "40px" : "80px"}
      >
        {children}
      </Flex>
    </Flex>
  );
};
