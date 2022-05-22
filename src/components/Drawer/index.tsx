import { ReactNode } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  placement: "left" | "right";
  children: ReactNode;
  button: ReactNode;
};

export const Drawer = ({
  isOpen,
  onClose,
  placement,
  children,
  button,
}: DrawerProps) => {
  return (
    <>
      {button}
      <ChakraDrawer isOpen={isOpen} placement={placement} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};
