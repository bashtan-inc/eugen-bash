import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 768px){
      width: 720px;
      max-width: 100%;
    }
    @media (min-width: 576px){
        width: 540px;
        max-width: 100%;
    }
    @media (min-width: 768px){
        padding-right: 15px;
        padding-left: 15px;
    }
    @media (min-width: 576px){
        padding-right: 15px;
        padding-left: 15px;
    }
`

const Row = styled.div`
  @media (min-width: 768px){
      margin-right: -15px;
      margin-left: -15px;
  }
  @media (min-width: 576px){
      margin-right: -15px;
      margin-left: -15px;
  }

      display: flex;
      flex-wrap: wrap;
      margin-right: -15px;
      margin-left: -15px;
`

const Intro = styled.div`
    padding: 0 20px;
    margin-top: 100px;
    text-align: center;
    background: #fff;

    color: black;
    
    width: 100%;
    min-height: 400px;
`

export const Content = ()=>{
    return <Container>
      <Row>
        <Intro>
      About
      </Intro>
      </Row>
      </Container>
}