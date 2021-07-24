import React from "react";
import Image from "next/image";

import { Container } from "styles/global";

import { HeaderWrapper, Logo, RouteButton } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <Image src={require("./assets/clock.svg")} height={50} width={50} alt="Clock" />
        </Logo>
        <RouteButton>Все дни</RouteButton>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
