import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    @media (min-width: 992px) {
        width: 960px;
        max-width: 100%;
    }
`


const Content = styled.div`

`


const Wrapper = styled.div`
    border-radius: 5px;
    padding: 30px 40px 20px;
    background: #FFAD01;
    color: #fff;
`;

export const Header = ({className})=>{
    return <Wrapper className={className}>header</Wrapper>
}