import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { Button as ButtonComponent } from "../../Button";

type ModalDeleteProductProps = {
  cartId?: number;
  isOpen: boolean;
  onClose: () => void;
};

export function ModalDeleteProduct({
  isOpen,
  onClose,
  cartId,
}: ModalDeleteProductProps) {
  return (
    <Modal isCentered size="xl" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Remover produto do carrinho</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Tem certeza que deseja remover o produto selecionado?</Text>
        </ModalBody>

        <ModalFooter mt="10">
          <Button
            colorScheme="red"
            variant="outline"
            mr={3}
            size="lg"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <ButtonComponent maxWidth="250px" mt="0">
            Sim, deletar
          </ButtonComponent>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
