import { Link } from "react-router-dom";
import {
  Flex,
  Heading,
  Text,
  Image,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
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
  const [isLessThan500] = useMediaQuery("(max-width: 500px)");

  return (
    <>
      {posts.map((post) => (
        <Flex
          key={post.uid}
          as="div"
          bg="white"
          flexDir={isLessThan500 ? "column" : "row"}
          border="1px solid rgba(200, 200, 200, 0.6)"
          borderRadius="md"
          transition="transform 0.2s"
          _hover={{ boxShadow: "0 0 20px rgba(200, 200, 200, 0.9)" }}
        >
          <Flex as="div" w="100%" mb="4">
            <Image w="100%" src={post.banner.url} alt="" borderRadius="md" />
          </Flex>
          <Flex w="100%" flexDir="column" justifyContent="space-between" p="5">
            <Box w="100%" display="flex" flexDir="column">
              <Heading fontSize="1.2rem" lineHeight="26px">
                {post.title.text}
              </Heading>
              <Box w="100%" display="flex" flexDir="column" mt="5">
                <Text fontSize="0.9rem">{post.first_publication_date}</Text>
                <Text fontWeight="bold" fontSize="0.7rem">
                  {post.author}
                </Text>
              </Box>
            </Box>
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Link to={`/blog/${post.uid}`}>
                <Button
                  colorScheme="orange"
                  mt="3"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  gap="10px"
                >
                  <FaDog color="white" size={30} />
                  Ver Post
                </Button>
              </Link>
            </Box>
          </Flex>
        </Flex>
      ))}
    </>
  );
}
