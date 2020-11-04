import React from 'react';
import styled from 'styled-components';
import { Social } from '../social';
const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Social />
    </FooterContainer>
  );
};
