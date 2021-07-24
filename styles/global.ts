import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    height: 100%;
    width: 100%;
    color: #ffffff;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;
