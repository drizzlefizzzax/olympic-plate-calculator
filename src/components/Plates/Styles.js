import styled from 'styled-components';

export const Bar = styled.div`
    height: 10px;
    width: 100px;
    background-color: silver;
    border-style: inset none none none;
`;

export const EmptyBar = styled(Bar)`
    margin-top: 50px;
`;

export const Sleeve = styled.div`
    height: 20px;
    width: ${(props) => props.width};
    background-color: silver;
    border-style: inset none none none;

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