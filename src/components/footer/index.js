import React from 'react';
import styled from 'styled-components';
import store from '../../store';

const FooterContainer = styled.footer`
  width: 100%;
  z-index: 100;
  background-color: #28023d;
  color: #777;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  height: 36px;

  @media (max-width: 600px) {
    position: relative;
    width: 100%;
    padding: 10px;
  }
`;

export const Footer = () => {
  return <FooterContainer>{store.copyrights}</FooterContainer>;
};
