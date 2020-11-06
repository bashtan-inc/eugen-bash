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

  @media (max-width: 450px) {
    width: 100%;
    background-color: white;
    padding-top: 50px;
  }
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

  @media (max-width: 450px) {
    padding-top: 50px;
    width: 100%;
    border-radius: 0;
  }
`;

const Photo = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 100px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  margin-bottom: -100px;
  @media (max-width: 450px) {
    height: 150px;
    width: 150px;
    margin-bottom: auto;
  }
`;

const Name = styled.h2`
  line-height: 1.1;
  color: #333;
  font-size: 35.2px;
  margin: 10px;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 26px;
  }
`;

const Description = styled.h4`
  color: #ffa600;
  font-size: 20.8px;
  margin: 0px;
  text-align: center;
  @media (max-width: 450px) {
    font-size: 16px;
  }
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
