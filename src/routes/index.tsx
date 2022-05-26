import { Route, Routes } from "react-router-dom";
import Blog from "../pages/Blog";
import Carrinho from "../pages/Carrinho";
import Categorias from "../pages/Categorias";
import CriarConta from "../pages/CriarConta";
import Dashboard from "../pages/Dashboard";
import Clientes from "../pages/Dashboard/Clientes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Produto from "../pages/Produto";
import Cachorros from "../pages/Produtos/Cachorros";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<CriarConta />} />
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/clientes" element={<Clientes />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="/produtos/cachorros" element={<Cachorros />} />
    </Routes>
  );
};
