import { Flex, Heading } from "@chakra-ui/react";
import { CardCategorias } from "../../components/Cards/CardCategorias";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import dogsImg from "../../assets/categorias/dogs.jpg";
import birdsImg from "../../assets/categorias/birds.jpg";
import catsImg from "../../assets/categorias/cats.jpg";
import fishsImg from "../../assets/categorias/fishs.jpg";
import hamstersImg from "../../assets/categorias/hamsters.jpg";

export default function Categorias() {
  return (
    <MainLayout>
      <Layout>
        <Heading fontSize="2rem" mt="10" textAlign="center">
          Categorias
        </Heading>
        <Flex w="100%" flexDir="column" my="5" gap="10px">
          <CardCategorias
            urlImage={dogsImg}
            title="Cachorros"
            subtitle="O cão, no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano."
            urlLink="/categorias/dogs"
          />

          <CardCategorias
            urlImage={catsImg}
            title="Gatos"
            subtitle="O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação."
            urlLink="/categorias/cats"
          />

          <CardCategorias
            urlImage={fishsImg}
            title="Peixes"
            subtitle="Oferecer aos peixes um ecossistema semelhante ao encontrado em seu habitat é sem dúvida uma necessidade para a qualidade de vida desses seres."
            urlLink="/categorias/fishs"
          />

          <CardCategorias
            urlImage={hamstersImg}
            title="Hamsters"
            subtitle="Hamster [rémster] ou criceto é uma designação comum a diversos pequenos mamíferos roedores. Cada vez mais pessoas optam por ter um hamster como animal de estimação."
            urlLink="/categorias/hamsters"
          />

          <CardCategorias
            urlImage={birdsImg}
            title="Aves"
            subtitle="Pássaros são aves bastante singulares e especiais, principalmente por manterem os dias dos tutores mais felizes com suas diferentes cantorias, cores e diversidades."
            urlLink="/categorias/birds"
          />
        </Flex>
      </Layout>
    </MainLayout>
  );
}
