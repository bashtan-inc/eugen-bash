import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Container = styled.header`
    position: relative;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 992px) {
        width: 960px;
        max-width: 100%;
    }
`;

const Wrapper = styled.div`
    border-radius: 5px;
    padding: 30px 40px 20px;
    background: #FFAD01;
    color: #fff;
`;

export const Header = ({className})=>{
    return  <Head>
                <Container>
                    <Wrapper className={className}>header</Wrapper>
                </Container>
            </Head>
}