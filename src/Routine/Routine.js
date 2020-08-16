import React from 'react';
import styled from 'styled-components';
import Bench from './Bench/Bench';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
`





const Routine = (props) => {
    // for(let i=0;i<props.routine.length;i++){
    //     switch(props.routine[i].type) {
    //         case "bench":
    //             bench = props.routine[i].routine.benchRoutine;
    //             break;
    //         case "squat":
    //             squat = props.routine[i].routine.squatRoutine;
    //             break;
    //         case "deadlift":
    //             deadlift = props.routine[i].routine.deadliftRoutine;
    //             break;
    //         default:
    //             break;
    //     }
    // }
    // console.log(bench);
    // return(
        // <StyledDiv>
        //     <Bench routine={bench}></Bench>
        //     <Bench routine={bench}></Bench>
        // </StyledDiv>
    // );
}

export default Routine;