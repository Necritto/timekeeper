import React from "react";

import { Container } from "styles/global";
import CustomImage from "components/CusomImage";

import { HeaderWrapper, Logo, RouteButton } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <CustomImage path="/icons/clock.svg" height={50} width={50} alt="Clock" />
        </Logo>
        <RouteButton>Все дни</RouteButton>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
