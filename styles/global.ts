import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --black: #232526;
    --grey: #414345;
    --white: #ffffff;
    --red: #ee3769;
    --shadowColor: rgba(26, 22, 22, 0.49);
    --backgroundColor: #6a7989;
  }

  * {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: var(--white);
    background: var(--black);
    background: linear-gradient(to right, var(--grey), var(--black));
    font-family: 'Montserrat', sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--black);

    #__next {
      width: 100%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      color: var(--white);
    }

    main {
      flex: 1 0 auto;
    }

    button, a {
      cursor: pointer;
    }    
    
    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        background: var(--black);
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--black);
        border-radius: 20px;
        border: 3px solid var(--red);
    }
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  padding: 0 20px;
  margin: 0 auto;
`;
