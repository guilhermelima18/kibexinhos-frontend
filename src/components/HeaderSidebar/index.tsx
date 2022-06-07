import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Accordion } from "../Accordion";

export function HeaderSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button bg="#FFB515" onClick={onOpen}>
        <GiHamburgerMenu fontSize={24} color="white" />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white">
          <DrawerCloseButton />
          <Flex w="100%" h="100vh" pt={50} flexDir="column">
            <Accordion />
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
