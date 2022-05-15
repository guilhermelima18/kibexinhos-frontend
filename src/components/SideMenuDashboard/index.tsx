import { Link } from "react-router-dom";
import { Box, Tooltip, Flex, useMediaQuery } from "@chakra-ui/react";
import { SideMenuLinks } from "./SideMenuLinks";
import { FiLogOut } from "react-icons/fi";

export const SideMenuDashboard = () => {
  const isLessThan460 = useMediaQuery("(max-width: 460px)");
  const routesDashboard = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Clientes",
      path: "/dashboard/clientes",
    },
    {
      name: "Pedidos",
      path: "/dashboard/pedidos",
    },
    {
      name: "Financeiro",
      path: "/dashboard/financeiro",
    },
  ];

  return (
    <Box
      bg="orange.500"
      w={isLessThan460 ? "40px" : "80px"}
      minH="100vh"
      position="fixed"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      p="2"
      py="5"
    >
      <Flex w="100%" flexDir="column" gap="30px">
        <SideMenuLinks routesDashboard={routesDashboard} />
      </Flex>
      <Flex w="100%">
        <Link to="/">
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
          >
            <Tooltip
              hasArrow
              shouldWrapChildren
              placement="right"
              label="Sair"
              bg="gray.800"
            >
              <FiLogOut color="white" size={20} />
            </Tooltip>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};
