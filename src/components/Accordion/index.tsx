import { Link } from "react-router-dom";
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const Accordion = () => {
  return (
    <ChakraAccordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Menu
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Link to="/">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Início
            </Box>
          </Link>
          <Link to="/blog">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Blog
            </Box>
          </Link>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Categorias
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Link to="/produtos/1">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Cachorros
            </Box>
          </Link>
          <Link to="/produtos/2">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Gatos
            </Box>
          </Link>
          <Link to="/produtos/5">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Aves
            </Box>
          </Link>
          <Link to="/produtos/3">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Peixes
            </Box>
          </Link>
          <Link to="/produtos/4">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Roedores
            </Box>
          </Link>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" fontWeight="bold">
              Conta
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Link to="/login">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Entrar
            </Box>
          </Link>
          <Link to="/criar-conta">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Criar Conta
            </Box>
          </Link>
          <Link to="/carrinho">
            <Box w="100%" p="3" _hover={{ backgroundColor: "gray.200" }}>
              Carrinho
            </Box>
          </Link>
        </AccordionPanel>
      </AccordionItem>
    </ChakraAccordion>
  );
};
