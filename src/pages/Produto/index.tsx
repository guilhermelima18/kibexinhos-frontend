import {
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { Button } from "../../components/Button";

export default function Produto() {
  return (
    <>
      <Header />
      <Layout>
        <Flex w="100%" flexDir="column" px="5" my="8" py="8">
          <SimpleGrid minChildWidth="350px">
            <Flex as="section" mr={["0", "0", "5"]}>
              <Image
                w={["100%", "100%", "400px"]}
                borderRadius="md"
                src=""
                alt=""
              />
            </Flex>
            <Flex flexDir="column" py="5">
              <Heading fontSize="2xl" lineHeight="34px" mb="3">
                Teste
              </Heading>
              <HStack my="5" justifyContent="space-between">
                <Text>
                  <strong>Código: </strong>
                  1000021000221002
                </Text>
                <Text>
                  <strong>Marca: </strong>
                </Text>
              </HStack>
              <HStack w="100%" justifyContent="space-between">
                <VStack alignItems="flex-start">
                  <Text>
                    <strong>Em estoque: </strong>
                  </Text>
                  <Text>
                    <strong>Valor: </strong>
                  </Text>
                </VStack>
                <Button maxWidth="80px" mt="0" onClick={() => {}}>
                  <FaShoppingCart fontSize={24} color="white" />
                </Button>
              </HStack>
              <Flex my="5">
                {/* <Input
                  labelText="Calcular frete"
                  inputName="calcFrete"
                  inputType="text"
                  variant="flushed"
                  borderColor="gray.400"
                  _focus={{ borderColor: "orange.500" }}
                /> */}
              </Flex>
              <HStack alignItems="center">
                <Button mt="0">Calcular</Button>
              </HStack>
            </Flex>
          </SimpleGrid>
        </Flex>
      </Layout>
    </>
  );
}
