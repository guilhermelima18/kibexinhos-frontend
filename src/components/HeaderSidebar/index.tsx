import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { NavMenu } from "../Header/NavMenu";
import { GiHamburgerMenu } from "react-icons/gi";

export function HeaderSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button bg="#FFB515" onClick={onOpen}>
        <GiHamburgerMenu fontSize={24} color="white" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.600">
          <DrawerCloseButton color="white" />
          <Flex w="100%" h="100vh" pt={50} flexDir="column"></Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
