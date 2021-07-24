import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    background: #232526;
    background: -webkit-linear-gradient(to right, #414345, #232526);
    background: linear-gradient(to right, #414345, #232526);
    font-family: 'Montserrat', sans-serif;

    header,
    footer {
      flex: 0 0 auto;
    }

    main {
      flex: 1 0 auto;
    }
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
`;
