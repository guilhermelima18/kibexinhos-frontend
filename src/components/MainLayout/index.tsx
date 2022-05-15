import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
