import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { formatCurrency } from "../../../utils/formatCurrency";

type ModalParcelasProps = {
  isOpen: boolean;
  onClose: () => void;
  parcelas: number[];
};

export const ModalParcelas = ({
  isOpen,
  onClose,
  parcelas,
}: ModalParcelasProps) => {
  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Parcelas</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex w="100%" flexDir="column" gap="3px" mb="5">
            {parcelas &&
              parcelas.map((parcela, index) => (
                <Text key={index} bg="gray.200" py="1" px="3" borderRadius="md">
                  {index + 1}x sem juros de{" "}
                  <strong>{formatCurrency(parcela)}</strong>
                </Text>
              ))}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
