import React from 'react';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import styled from 'styled-components';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
    margin: 0px;
    font-family: 'Poppins', serif;
  }
  h1, h2, h3 {
    font-family: 'Poppins', cursive;
  }
  h1, h2, h3, h4, h5, h6 {
      line-height: 1.5;
  }

`;

const AppContainer = styled.div`
  background-image: url(assets/background-1920x1080.jpg);
  background-size: cover;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
  flex-direction: column;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
  }
`;

export const App = () => {
  return (
    <>
      <GlobalStyle whiteColor />
      <AppContainer>
        <Header />
        <Content />
        <Footer />
      </AppContainer>
    </>
  );
};
