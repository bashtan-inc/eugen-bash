import React from "react";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import styled from "styled-components";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => (props.whiteColor ? "white" : "black")};
    font-family: ${(props) => props.theme.fontFamily};
    margin: 0px;
  }
`;

const AppContainer = styled.div``;

const IntroSection = styled.section`
  padding-top: 200px;
  position: relative;
  background-size: cover;
  z-index: 1;
  background-image: url(assets/background-1920x1080.jpg);

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const App = () => {
  return (
    <ThemeProvider theme={{ fontFamily: "Helvetica Neue" }}>
      <AppContainer>
        <Header />
        <IntroSection>
          <Content />
        </IntroSection>
        <Footer />
        <GlobalStyle whiteColor />
      </AppContainer>
    </ThemeProvider>
  );
};
