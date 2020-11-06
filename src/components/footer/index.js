import React from 'react';
import styled from 'styled-components';
import store from '../../store';

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: white;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 36px;
`;

export const Footer = () => {
  return <FooterContainer>{store.copyrights}</FooterContainer>;
};
