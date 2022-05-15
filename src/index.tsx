import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";
import { theme } from "./styles/theme";
import { ToastContainer } from "react-toastify";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./styles/slider.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <PrismicProvider client={client}>
        <App />
        <ToastContainer autoClose={3000} />
      </PrismicProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
