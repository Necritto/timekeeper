import React from "react";

import { Container } from "styles/global";
import UIImage from "components/UI/UIImage";

import { HeaderWrapper, Logo, RouteButton } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Logo>
          <UIImage path="/icons/clock.svg" height={50} width={50} alt="Clock" />
        </Logo>
        <RouteButton>All days</RouteButton>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
