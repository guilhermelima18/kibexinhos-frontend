/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  VStack,
  Text,
  useMediaQuery,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { Button } from "../../components/Button";
import { SwiperCarousel } from "../../components/Carousel/SwiperCarousel";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import { GoogleMaps } from "../../components/GoogleMaps";
import { CardCachorros } from "../../components/Cards/CardProdutosMaisVendidos/CardCachorros";
import { CardGatos } from "../../components/Cards/CardProdutosMaisVendidos/CardGatos";
import { Newsletter } from "../../components/Newsletter";
import { CardOfertas } from "../../components/Cards/CardOfertas";
import { useProdutosOfertas } from "../../hooks/useProdutosOfertas";
import { Loading } from "../../components/Loading";
import bannerFreteGratisImg from "../../assets/banner-fretes-gratis.svg";
import patasDogImg from "../../assets/patas-dog.svg";
import marcaIcon1 from "../../assets/marca-1.svg";
import marcaIcon2 from "../../assets/marca-2.svg";
import marcaIcon3 from "../../assets/marca-3.svg";
import marcaIcon4 from "../../assets/marca-4.svg";
import dogImg from "../../assets/dog.png";
import { useProdutosCachorros } from "../../hooks/useProdutosCachorros";
import { useProdutosGatos } from "../../hooks/useProdutosGatos";

export default function Home() {
  const { getOfertas, produtosOfertas, loading } = useProdutosOfertas();
  const { getProdutosCachorrosMaisVendidos, produtosCachorrosMaisVendidos } =
    useProdutosCachorros();
  const { getProdutosGatosMaisVendidos, produtosGatosMaisVendidos } =
    useProdutosGatos();
  const [isLessThan860] = useMediaQuery("(max-width: 860px)");
  const [isLessThan600] = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    getOfertas();
    getProdutosCachorrosMaisVendidos();
    getProdutosGatosMaisVendidos();
  }, []);

  return (
    <MainLayout>
      <Flex bg="orange.500" w="100%" py="10" borderBottomRightRadius="50%">
        <Flex
          as="main"
          w="100%"
          maxW="1200px"
          h="50vh"
          mx="auto"
          px="5"
          backgroundImage={isLessThan860 ? "none" : `url(${dogImg})`}
          backgroundRepeat="no-repeat"
          backgroundPosition="top right"
          backgroundSize="contain"
        >
          <VStack
            as="section"
            w={isLessThan860 ? "100%" : "60%"}
            alignItems="flex-start"
            justifyContent="center"
            gap="20px"
            py="5"
          >
            <Heading color="white" fontSize={["1.5rem", "1.7rem", "2rem"]}>
              Tudo o que seu pet precisa
              <br />a Kibexinhos Petshop tem!
            </Heading>
            <Text color="white" fontSize={["1rem", "1.2rem", "1.3rem"]}>
              Seja para comprar um petisco ou uma roupinha
              <br />
              estilosa... Basta você selecionar o produto, escolher
              <br />
              como deseja pagar e pronto.
            </Text>
            <Link to="/categorias">
              <Button
                bg="#FFB515"
                w="100%"
                maxW={isLessThan860 ? "350px" : "450px"}
                size="lg"
                fontSize="md"
                color="white"
                _hover={{ backgroundColor: "yellow.500" }}
              >
                CONFERIR PRODUTOS
              </Button>
            </Link>
          </VStack>
        </Flex>
      </Flex>
      <Layout>
        <SwiperCarousel />
        <SimpleGrid
          w="100%"
          minChildWidth="250px"
          alignItems="center"
          justifyItems="center"
          spacing={5}
          my="10"
        >
          <Image w="200px" src={marcaIcon1} alt="Marcas mais vendidas" />
          <Image w="200px" src={marcaIcon2} alt="Marcas mais vendidas" />
          <Image w="200px" src={marcaIcon3} alt="Marcas mais vendidas" />
          <Image w="200px" src={marcaIcon4} alt="Marcas mais vendidas" />
        </SimpleGrid>
        <Heading
          textAlign="left"
          fontSize={["1.1rem", "1.3rem"]}
          mt="10"
          mb="5"
        >
          OFERTAS DO DIA
        </Heading>
        {loading ? (
          <Loading />
        ) : produtosOfertas.length === 0 ? (
          <Text>Não há ofertas no momento.</Text>
        ) : (
          <CardOfertas produtos={produtosOfertas} />
        )}

        <Heading
          textAlign="left"
          fontSize={["1.1rem", "1.3rem"]}
          mt="10"
          mb="5"
        >
          MAIS VENDIDOS PARA CACHORROS
        </Heading>
        {loading ? (
          <Loading />
        ) : produtosCachorrosMaisVendidos.length === 0 ? (
          <Text>Não há produto para cachorros no momento.</Text>
        ) : (
          <CardCachorros produtos={produtosCachorrosMaisVendidos} />
        )}

        <Heading
          textAlign="left"
          fontSize={["1.1rem", "1.3rem"]}
          mt="10"
          mb="5"
        >
          MAIS VENDIDOS PARA GATOS
        </Heading>
        {loading ? (
          <Loading />
        ) : produtosGatosMaisVendidos.length === 0 ? (
          <Text>Não há produto para gatos no momento.</Text>
        ) : (
          <CardGatos produtos={produtosGatosMaisVendidos} />
        )}
        <Flex
          bg="#FFB515"
          w="100%"
          h={isLessThan600 ? "450px" : "250px"}
          justifyContent="flex-end"
          backgroundImage={`url(${bannerFreteGratisImg})`}
          backgroundRepeat="no-repeat"
          backgroundPosition={isLessThan600 ? "top center" : "left"}
          backgroundSize={isLessThan600 ? "250px" : "contain"}
          my="10"
          p="5"
          borderRadius="md"
        >
          <Flex
            backgroundImage={`url(${patasDogImg})`}
            backgroundRepeat="no-repeat"
            backgroundPosition="top right"
            w={isLessThan600 ? "100%" : "50%"}
            flexDir="column"
            justifyContent={isLessThan600 ? "flex-end" : "space-between"}
          >
            <VStack
              w="100%"
              alignItems={isLessThan600 ? "center" : "flex-start"}
            >
              <Heading color="white">Frete Grátis</Heading>
              <Text color="white">
                A partir de
                <Heading as="span" color="black" ml="3" fontWeight="bold">
                  R$ 99
                </Heading>
                .
              </Text>
            </VStack>
            <VStack w="100%">
              <Text
                w="100%"
                textAlign={isLessThan600 ? "center" : "left"}
                my={isLessThan600 ? "5" : "0"}
                color="white"
                fontSize="xs"
              >
                Produtos sujeitos à disponibilidade de estoque
                <br />e desconto válido. Consulte nossa política de Frete Grátis
              </Text>
            </VStack>
          </Flex>
        </Flex>
      </Layout>
      <Newsletter />
      <GoogleMaps />
    </MainLayout>
  );
}
