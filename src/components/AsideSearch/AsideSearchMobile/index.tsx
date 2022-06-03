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
  tipoProduto: number[];
  marcasProdutos: number[];
  porte: string[];
  setTipoProduto: Dispatch<SetStateAction<number[]>>;
  setMarcasProdutos: Dispatch<SetStateAction<number[]>>;
  setPorte: Dispatch<SetStateAction<string[]>>;
};

export const AsideSearchMobile = ({
  isOpen,
  onOpen,
  onClose,
  marcas,
  tipoProduto,
  marcasProdutos,
  porte,
  setTipoProduto,
  setMarcasProdutos,
  setPorte,
}: AsideSearchMobileProps) => {
  useEffect(() => {
    onClose();
  }, [marcasProdutos, tipoProduto, porte]);

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
          tipoProduto={tipoProduto}
          marcasProdutos={marcasProdutos}
          porte={porte}
          setTipoProduto={setTipoProduto}
          setPorte={setPorte}
          setMarcasProdutos={setMarcasProdutos}
          size="100%"
        />
      </Flex>
    </Drawer>
  );
};
