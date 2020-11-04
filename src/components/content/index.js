import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Intro = styled.div``;

export const Content = () => {
  return (
    <Container>
      <Intro>About</Intro>
    </Container>
  );
};
