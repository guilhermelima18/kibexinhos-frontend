import { Link } from "react-router-dom";
import { Flex, Heading, Text, Image } from "@chakra-ui/react";
import { Button } from "../../Button";
import { FaDog } from "react-icons/fa";

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

type CardBlogProps = {
  posts: PostsProps[];
};

export function CardBlog({ posts }: CardBlogProps) {
  return (
    <>
      {posts.map((post) => (
        <Flex
          key={post.uid}
          as="div"
          bg="white"
          flexDir="column"
          alignItems="center"
          border="1px solid rgba(200, 200, 200, 0.6)"
          borderRadius="md"
          transition="transform 0.2s"
          _hover={{ boxShadow: "0 0 20px rgba(200, 200, 200, 0.9)" }}
        >
          <Flex as="div" w="100%" mb="4">
            <Image w="100%" src={post.banner.url} alt="" borderRadius="md" />
          </Flex>
          <Heading
            fontSize="1.2rem"
            lineHeight="30px"
            mb="2"
            px="2"
            textAlign="center"
          >
            {post.title.text}
          </Heading>
          <Flex w="100%" flexDir="column" alignItems="center" px="5" my="2">
            <Text fontSize="0.9rem">{post.first_publication_date}</Text>
          </Flex>
          <Link to={`blog/post`}>
            <Button
              colorScheme="orange"
              size="md"
              mt="3"
              mx="auto"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="10px"
            >
              <FaDog color="white" size={30} />
            </Button>
          </Link>
          <Text
            w="100%"
            textAlign="right"
            mt="5"
            fontWeight="bold"
            fontSize="0.7rem"
            p="2"
          >
            {post.author}
          </Text>
        </Flex>
      ))}
    </>
  );
}
