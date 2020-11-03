import React from 'react';
import {Content} from './components/content';
import {Header as HeaderBase} from './components/header';
import {Footer} from './components/footer';
import styled from 'styled-components';

const IntroSection = styled.section`
  padding-top: 200px;
  position: relative;
  background-size: cover;
  z-index: 1;
  background-image: url(assets/background-1920x1080.jpg);

  &::before{
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, .2);
  }
`

const Header = styled(HeaderBase)`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 100;
`

export const App = () => {
  return (
    <>
      <IntroSection>
        <Header/>
      </IntroSection>
      <Content/ >
      <Footer />
    </>
  );
}
