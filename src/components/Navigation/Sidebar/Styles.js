import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
    0%{
        left: 0px;
    }
    100%{
        left: 0px;
    }
`;

export const Sidebar = styled.div`
    position: absolute; 
    z-index: 500;
    width: 200px;
    height: 100%;
    background-color: grey;
    animation: 1s ${slideIn};
`;

export const Backdrop = styled.div`
    position: absolute;
    z-index: 400;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.4;
`;

export const Link = styled.li`
    height: 50px;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    &:hover{
        background-color: green;
        cursor: pointer;
    }
`;

export const ActiveLink = styled(Link)`
    background-color: darkgreen;
`;