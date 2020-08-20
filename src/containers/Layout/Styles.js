import styled, { keyframes } from 'styled-components';
import { slideInLeft, slideOutLeft } from 'react-animations';

export const Centered = styled.div`
    text-align: center;
    touch-action: manipulation;
`;

export const SlideInLeft = styled.div`
    animation: 0.1s ${keyframes`${slideInLeft}`};
`;

export const SlideOutLeft = styled.div`
    animation: 0.1s ${keyframes`${slideOutLeft}`};
`;

export const FlexCentered = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
`;

export const Plate = styled.div`
    border-radius: 5px;
    height: 100px;
    color: white;
    border-style: inset;
    border-width: 3px;
`;

export const RedPlate = styled(Plate)`
    width: 9px;
    background-color: red;
    border-color: #e80202;
`;

export const BluePlate = styled(Plate)`
    width: 9px;
    background-color: blue;
    border-color: #0000e0;
`;

export const YellowPlate = styled(Plate)`
    width: 9px;
    background-color: yellow;
    border-color: #e6e600;
`;

export const GreenPlate = styled(Plate)`
    width: 9px;
    background-color: green;
    border-color: #006b00;
`;

export const GreyPlate = styled(Plate)`
    width: 9px;
    background-color: grey;
    border-color: #707070;
`;

export const RedFracPlate = styled(Plate)`
    height: 50px;
    width: 9px;
    background-color: red;
    border-color: #e80202;
`;

export const YellowFracPlate = styled(Plate)`
    height: 50px;
    width: 9px;
    background-color: yellow;
    border-color: #e6e600;
`;