import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

type LinkButtonProps = {
  linkUrl: string;
};

export function LinkButton({ linkUrl }: LinkButtonProps) {
  return (
    <Link to={linkUrl}>
      <Box
        bg="orange.500"
        w="100%"
        p="3"
        borderRadius="md"
        textAlign="center"
        fontSize="md"
        fontWeight="bold"
        color="white"
        cursor="pointer"
        transition="500ms"
        mt="5"
        _hover={{ backgroundColor: "orange.700" }}
      >
        Ver mais
      </Box>
    </Link>
  );
}
