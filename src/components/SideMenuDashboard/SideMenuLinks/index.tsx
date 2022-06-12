import { Link } from "react-router-dom";
import { Box, Image, Tooltip } from "@chakra-ui/react";
import { FaTruck } from "react-icons/fa";
import logoKibexinhos from "../../../assets/logo-kibexinhos.png";

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
                  src={logoKibexinhos}
                  alt="Logo Kibexinhos PetShop"
                />
              ) : (
                <FaTruck color="white" size={26} />
              )}
            </Tooltip>
          </Box>
        </Link>
      ))}
    </>
  );
};
