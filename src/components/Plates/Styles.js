import styled from 'styled-components';

export const Bar = styled.div`
    height: 10px;
    width: 100px;
    background-color: silver;
`;

export const Sleeve = styled.div`
    height: 20px;
    width: ${(props) => props.width};
    background-color: silver;
`;

export const Plate = styled.div`
    border-radius: 5px;
    height: 100px;
    color: white;
`;

export const RedPlate = styled(Plate)`
    width: 15px;
    background-color: red;
`;

export const BluePlate = styled(Plate)`
    width: 15px;
    background-color: blue;
`;

export const YellowPlate = styled(Plate)`
    width: 15px;
    background-color: yellow;
`;

export const GreenPlate = styled(Plate)`
    width: 15px;
    background-color: green;
`;

export const GreyPlate = styled(Plate)`
    width: 15px;
    background-color: grey;
`;

export const RedFracPlate = styled(Plate)`
    height: 50px;
    width: 15px;
    background-color: red;
`;

export const YellowFracPlate = styled(Plate)`
    height: 50px;
    width: 15px;
    background-color: yellow;
`;