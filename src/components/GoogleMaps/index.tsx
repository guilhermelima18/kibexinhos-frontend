import { Flex } from "@chakra-ui/react";

export const GoogleMaps = () => {
  return (
    <Flex bg="orange.500" w="100%" h="500px" mt="5">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1097.500950192172!2d-48.54853423697791!3d-22.295466705291066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7580f83c93857%3A0x296601ca8ab559bb!2sAv.%20Dr.%20Quinzinho%2C%20135%20-%20Jardim%20Jorge%20Atalla%2C%20Ja%C3%BA%20-%20SP%2C%2017211-478!5e0!3m2!1spt-BR!2sbr!4v1647608400107!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ maxWidth: "1200px", border: "0", margin: "auto" }}
        loading="lazy"
      ></iframe>
    </Flex>
  );
};
