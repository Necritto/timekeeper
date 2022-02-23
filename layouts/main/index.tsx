import React from "react";

import Footer from "components/Footer";
import Header from "components/Header";
import { MainLayoutPropsInterface } from "types/common/mainLayout";
import { GlobalStyle } from "styles/global";

const MainLayout: React.FC<MainLayoutPropsInterface> = ({ children }) => {
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
