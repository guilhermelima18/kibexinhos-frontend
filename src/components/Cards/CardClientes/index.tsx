import { Flex } from "@chakra-ui/react";
import { CardClientesItem } from "./CardClientesItem";

export const CardClientes = () => {
  return (
    <Flex w="100%" flexDir="column" gap="10px">
      <CardClientesItem clienteId="1" />
      <CardClientesItem clienteId="1" />
      <CardClientesItem clienteId="1" />
      <CardClientesItem clienteId="1" />
      <CardClientesItem clienteId="1" />
      <CardClientesItem clienteId="1" />
    </Flex>
  );
};
