import React from 'react';
import styled from 'styled-components';
import store from '../../store';
import { Social } from '../social';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

const Intro = styled.div`
  height: 200px;
  width: 400px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 150px;
  border-radius: 5px;
`;

const Photo = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  margin-bottom: -100px;
`;

const Name = styled.h2`
  line-height: 1.1;
  color: #333;
  font-size: 35.2px;
  margin: 10px;
`;

const Description = styled.h4`
  color: #ffa600;
  font-size: 20.8px;
  margin: 0px;
`;

export const Content = () => {
  return (
    <Container>
      <Photo src="./assets/profile-photo.jpg" />
      <Intro>
        <b>
          <Name>{store.name}</Name>
        </b>
        <Description>{store.description}</Description>
        <Social />
      </Intro>
    </Container>
  );
};
