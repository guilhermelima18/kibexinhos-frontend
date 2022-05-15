import { Flex, VStack, Image, useMediaQuery } from "@chakra-ui/react";
import { HeaderSidebar } from "../HeaderSidebar";
import { NavMenu } from "./NavMenu";
import logoKibexinhosIcon from "../../assets/logo-kibexinhos.png";

export function Header() {
  const [isLessThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex as="header" bg="orange.500" w="100%">
      <Flex
        as="nav"
        w="100%"
        maxW="1200px"
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        py="2"
        px="5"
      >
        <VStack>
          <Image w="100px" src={logoKibexinhosIcon} alt="Logo Kibexinhos" />
        </VStack>
        {isLessThan700 ? <HeaderSidebar /> : <NavMenu />}
      </Flex>
    </Flex>
  );
}
