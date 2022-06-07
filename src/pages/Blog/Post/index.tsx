/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { Layout } from "../../../components/Layout";
import { MainLayout } from "../../../components/MainLayout";
import { client } from "../../../services/prismic";
import { formatDate } from "../../../utils/formatDate";

type PostProps = {
  first_publication_date: string | null;
  uid: string | null;
  data: {
    author: string;
    banner: {
      url: string;
    };
    title: {
      text: string;
    }[];
    content: {
      heading: {
        text: string;
      }[];
      body: {
        text: string;
      }[];
    }[];
  };
};

export default function Post() {
  const { slug } = useParams();
  const [post, setPost] = useState<PostProps>();

  const getPost = useCallback(async () => {
    const response = await client.getByUID("posts", String(slug), {});

    if (response) {
      const data = {
        first_publication_date: formatDate(response.first_publication_date),
        uid: response.uid,
        data: {
          author: response.data.author,
          banner: response.data.banner,
          title: response.data.title,
          content: response.data.content,
        },
      };

      setPost(data);
    }
  }, []);

  useEffect(() => {
    getPost();
  }, []);

  return (
    <MainLayout>
      <Layout>
        <Flex
          bg="white"
          w="100%"
          maxW="800px"
          flexDir="column"
          mx="auto"
          my="5"
          p="5"
        >
          <Flex w="100%" alignItems="center" justifyContent="center" mb="10">
            <Image
              src={post?.data.banner.url}
              alt={post?.data.title[0].text}
              borderRadius="md"
            />
          </Flex>

          <Flex w="100%" flexDir="column">
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb="5"
            >
              <Heading fontSize="1.5rem">{post?.data.title[0].text}</Heading>
            </Box>
            {post?.data.content.map(({ heading, body }, index) => (
              <div key={index}>
                <h3 style={{ marginBottom: "10px" }}>{heading[0].text}</h3>
                {body.map(({ text }) => (
                  <div
                    dangerouslySetInnerHTML={{ __html: text }}
                    style={{ fontSize: "0.9rem", lineHeight: "26px" }}
                  />
                ))}
              </div>
            ))}
          </Flex>
        </Flex>
      </Layout>
    </MainLayout>
  );
}
