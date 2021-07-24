import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import { MainLayoutProps } from "types/mainLayout";
import { GlobalStyle } from "styles/global";

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
