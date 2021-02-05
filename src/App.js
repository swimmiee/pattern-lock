import React from 'react';
import styled from 'styled-components';
import Pattern from './Pattern';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    background-color: #333;
    height: 100vh;
    & > div {
        width: min(100vw, 100vh);
    }
`
export default () => (
    <Wrapper>
        <Pattern />
    </Wrapper>
)