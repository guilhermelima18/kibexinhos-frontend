import { Box, Image, Tooltip } from "@chakra-ui/react";
import { FaHandHoldingUsd, FaProductHunt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

type SideMenuLinksProps = {
  routesDashboard: {
    name: string;
    path: string;
  }[];
};

export const SideMenuLinks = ({ routesDashboard }: SideMenuLinksProps) => {
  return (
    <>
      {routesDashboard.map(({ name, path }) => (
        <Link key={path} to={path}>
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
              label={name}
              bg="gray.800"
            >
              {path === "/dashboard" ? (
                <Image
                  w="100%"
                  src="/logo-kibexinhos.png"
                  alt="Logo Kibexinhos PetShop"
                />
              ) : path === "/dashboard/clientes" ? (
                <FaUser color="white" size={20} />
              ) : path === "/dashboard/pedidos" ? (
                <FaProductHunt color="white" size={20} />
              ) : (
                <FaHandHoldingUsd color="white" size={20} />
              )}
            </Tooltip>
          </Box>
        </Link>
      ))}
    </>
  );
};
