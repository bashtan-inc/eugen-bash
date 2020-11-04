import React from 'react';
import styled from 'styled-components';
import store from '../../store';

const SocialContainer = styled.div`
  display: flex;
`;

const Network = styled.div`
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
`;

export const Social = () => {
  return (
    <SocialContainer>
      {store.social.map((item) => (
        <Network>{item}</Network>
      ))}
    </SocialContainer>
  );
};
