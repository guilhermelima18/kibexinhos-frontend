import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./contexts/AuthContext";
import { CarrinhoProvider } from "./contexts/CarrinhoContext";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { theme } from "./styles/theme";
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
        <BrowserRouter>
          <AuthProvider>
            <CarrinhoProvider>
              <App />
            </CarrinhoProvider>
          </AuthProvider>
          <ToastContainer autoClose={3000} />
        </BrowserRouter>
      </PrismicProvider>
    </ChakraProvider>
  </React.StrictMode>
);

reportWebVitals();
