import { useCallback, useEffect, useState } from "react";
import {
  Flex,
  SimpleGrid,
  Image,
  Heading,
  Text,
  VStack,
  Divider,
  Center,
} from "@chakra-ui/react";
import * as prismic from "@prismicio/client";
import { Layout } from "../../components/Layout";
import { MainLayout } from "../../components/MainLayout";
import { CardBlog } from "../../components/Cards/CardBlog";
import backgroundDogsAndCatsImg from "../../assets/background-dogs-cats.svg";
import dogsAndCatsImg from "../../assets/dogs-cats.svg";
import { client } from "../../services/prismic";
import { formatDate } from "../../utils/formatDate";

type PostsProps = {
  uid: string;
  first_publication_date: string;
  author: string;
  banner: {
    url: string;
  };
  title: {
    text: string;
  };
};

export default function Blog() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  const getPostsBlog = useCallback(async () => {
    const response = await client.get({
      predicates: [prismic.predicate.at("document.type", "posts")],
      fetch: ["posts.title", "posts.author", "posts.banner"],
      pageSize: 3,
    });

    console.log(response.results);

    if (response) {
      const postsFormatted = response.results.map((post) => ({
        uid: post.uid as string,
        first_publication_date: formatDate(
          post.first_publication_date
        ) as string,
        author: post.data.author as string,
        banner: {
          url: post.data.banner.url as string,
        },
        title: {
          text: post.data.title[0].text as string,
        },
      }));

      setPosts(postsFormatted);
    }
  }, []);

  useEffect(() => {
    getPostsBlog();
  }, []);

  return (
    <MainLayout>
      <Layout>
        <Flex as="main" w="100%" flexDir="column" my="10">
          <SimpleGrid
            minChildWidth="380px"
            width="100%"
            spacing={20}
            mt="10"
            px="3"
          >
            <VStack
              as="section"
              backgroundImage={`url(${backgroundDogsAndCatsImg})`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center right"
            >
              <Image src={dogsAndCatsImg} alt="Cachorros e Gatos" />
            </VStack>
            <Flex as="section" flexDir="column" justifyContent="center">
              <Text color="orange.500" fontWeight="bold">
                Sobre a
              </Text>
              <Heading fontSize="2rem" mb="5">
                Kibexinho's Blog
              </Heading>
              <Text fontSize="0.9rem" lineHeight="24px">
                Sabemos que a correria do dia a dia ou até mesmo a preguiça,
                exigem soluções rápidas e práticas. Nosso maior foco é que seu
                animalzinho tenha informações essenciais no dia-a-dia dele com
                altíssima qualidade na hora em que ele mais precisa!
              </Text>
            </Flex>
          </SimpleGrid>

          <Center height="50px">
            <Divider orientation="horizontal" />
          </Center>

          <SimpleGrid minChildWidth="250px" spacing={5}>
            <CardBlog posts={posts} />
          </SimpleGrid>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
