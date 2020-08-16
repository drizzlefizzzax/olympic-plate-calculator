import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
    color: white;
    text-align: center;
`;
const StyledDiv = styled.div`
    background-color: blue;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: Monaco;
    font-weight: bold;
    font-size: 15pt;
`;

const Headline = () => {
    return(
        <StyledDiv>
            <StyledP>Russian Strength Routine Generator</StyledP>
        </StyledDiv>
    );
}

export default Headline;