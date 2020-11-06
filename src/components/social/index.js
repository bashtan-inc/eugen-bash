import React from 'react';
import styled from 'styled-components';
import store from '../../store';

const SocialContainer = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Network = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  line-height: 35px;
  width: 35px;
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
  position: relative;
  margin: 0 5px 5px;
  background: #887392;
  color: #fff;
  cursor: pointer;

  &:hover {
    background: #ffa804;
  }
`;

export const Social = () => {
  return (
    <SocialContainer>
      {store.social.map(({ icon, link }) => (
        <Network href={link} target="_blank">
          <ion-icon name={icon}></ion-icon>
        </Network>
      ))}
    </SocialContainer>
  );
};
