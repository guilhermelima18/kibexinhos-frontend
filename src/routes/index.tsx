import { Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import Post from "../pages/Blog/Post";
import Carrinho from "../pages/Carrinho";
import Categorias from "../pages/Categorias";
import CriarConta from "../pages/CriarConta";
import Dashboard from "../pages/Dashboard";
import Pedidos from "../pages/Dashboard/Pedidos";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Produto from "../pages/Produto";
import Produtos from "../pages/Produtos";
import { PrivateRoutes } from "./PrivateRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/" element={<Home />} />
      <Route
        path="/carrinho"
        element={<PrivateRoutes Component={Carrinho} />}
      />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/pedidos" element={<Pedidos />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<Post />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="/produtos/:id" element={<Produtos />} />
    </Routes>
  );
};
