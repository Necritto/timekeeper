import { Container } from "styles/global";

import { FooterWrapper } from "./styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <p>&copy; {new Date().getFullYear()} by Aleksandr Voronkin</p>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
