/* eslint-disable react-hooks/exhaustive-deps */
import { Dispatch, SetStateAction, useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { AsideSearch } from "..";
import { Drawer } from "../../Drawer";
import { MarcasProps } from "../../../types/Marcas";
import { Button } from "../../Button";
import { FaFilter } from "react-icons/fa";

type AsideSearchMobileProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  marcas: MarcasProps[];
  marcasProdutos: number[];
  setMarcasProdutos: Dispatch<SetStateAction<number[]>>;
};

export const AsideSearchMobile = ({
  isOpen,
  onOpen,
  onClose,
  marcas,
  marcasProdutos,
  setMarcasProdutos,
}: AsideSearchMobileProps) => {
  useEffect(() => {
    onClose();
  }, [marcasProdutos]);

  return (
    <Drawer
      placement="left"
      isOpen={isOpen}
      onClose={onClose}
      button={
        <Button
          colorScheme="orange"
          display="flex"
          alignItems="center"
          gap="10px"
          _focus={{ border: "none" }}
          onClick={onOpen}
        >
          Filtros <FaFilter color="white" />
        </Button>
      }
    >
      <Flex w="100%" mt="10">
        <AsideSearch
          marcas={marcas}
          marcasProdutos={marcasProdutos}
          setMarcasProdutos={setMarcasProdutos}
          size="100%"
        />
      </Flex>
    </Drawer>
  );
};
