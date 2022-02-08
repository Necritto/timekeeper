import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: #ffffff;
    background: #232526;
    background: linear-gradient(to right, #414345, #232526);
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;

    #__next {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      color: #ffffff;
    }

    main {
      flex: 1 0 auto;
    }

    button, a {
      cursor: pointer;
    }
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
`;
