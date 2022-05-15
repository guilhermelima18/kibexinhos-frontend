import { extendTheme } from "@chakra-ui/react";
import { StepsStyleConfig as Steps } from "chakra-ui-steps";
import "react-toastify/dist/ReactToastify.css";

export const theme = extendTheme({
  components: {
    Steps,
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});
