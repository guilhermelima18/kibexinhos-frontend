import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaAward, FaFilter } from "react-icons/fa";
import { Button } from "../../../components/Button";
import { CardClientes } from "../../../components/Cards/CardClientes";
import { CardResumoClientes } from "../../../components/Cards/CardResumoClientes";
import { InputSearch } from "../../../components/Input/InputSearch";
import { Layout } from "../../../components/Layout";
import { MainLayout } from "../../../components/MainLayoutDashboard";
import { MenuTitle } from "../../../components/MenuTitle";
import { Pagination } from "../../../components/Pagination";
import { Select } from "../../../components/Select";
import { Link } from "react-router-dom";

export default function Clientes() {
  const isLessThan1100 = useMediaQuery("(max-width: 1100px)");
  const isLessThan500 = useMediaQuery("(max-width: 500px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [optionsSelectFilter, setOptionsSelectFilter] = useState<number>(1);
  const [radioReleased, setRadioReleased] = useState<string>("s");
  const [radioStatus, setRadioStatus] = useState<string>("liberado");

  const optionsSelect = [
    {
      id: 1,
      nome: "Todos",
    },
    {
      id: 2,
      nome: "Nome",
    },
    {
      id: 3,
      nome: "E-mail",
    },
  ];

  const radioClearFilters = () => {
    setRadioReleased("");
    setRadioStatus("");
  };

  return (
    <MainLayout>
      <MenuTitle title="Clientes">
        <Link to="/clientes/premiacoes">
          <Button w="200px" fontSize="0.9rem" colorScheme="green" gap="5px">
            <FaAward fontSize={20} />
            Premiações
          </Button>
        </Link>
      </MenuTitle>
      <Layout>
        <Flex w="100%" my="5" px={isLessThan500 ? "3" : "0"}>
          <CardResumoClientes />
        </Flex>
        <Flex w="100%">
          <Box
            bg="white"
            w="100%"
            display="flex"
            flexDir={isLessThan1100 ? "column" : "row"}
            alignItems="center"
            justifyContent="space-between"
            gap={isLessThan1100 ? "20px" : "0"}
            py="5"
            px="3"
            borderRadius="md"
          >
            <Box
              w="100%"
              display="flex"
              flexDir={isLessThan500 ? "column" : "row"}
              alignItems="center"
              gap="20px"
            >
              <Select
                w="100%"
                minW="100px"
                maxW={isLessThan500 ? "100%" : "150px"}
                borderColor="gray.300"
                value={optionsSelectFilter}
                setValue={setOptionsSelectFilter}
              >
                {optionsSelect.map(({ id, nome }) => (
                  <option key={id} value={id}>
                    {nome}
                  </option>
                ))}
              </Select>
              <InputSearch
                w={isLessThan1100 ? "100%" : "600px"}
                name="pesquisaClientes"
                placeholder="Pesquise por cliente"
                autoFocus
              />
            </Box>
            <Box w="100%" maxW="200px" display="flex" justifyContent="flex-end">
              <Button
                fontSize="0.9rem"
                colorScheme="orange"
                onClick={onOpen}
                gap="5px"
              >
                <FaFilter fontSize={16} />
                Filtrar resultados
              </Button>
            </Box>
          </Box>
        </Flex>

        <Flex bg="white" w="100%" my="5" py="5" px="3" borderRadius="md">
          <CardClientes />
        </Flex>

        <Flex w="100%">
          <Text w="100%" textAlign="center" fontSize="0.8rem" color="gray.600">
            Total de Clientes: 520
          </Text>
        </Flex>

        <Flex
          w="100%"
          alignItems="center"
          justifyContent="space-between"
          my="5"
          py="5"
          px="3"
        >
          <Pagination
            currentPage={1}
            lastPage={20}
            totalCountOfRegisters={200}
            onPageChange={() => {}}
          />
        </Flex>
      </Layout>
    </MainLayout>
  );
}
