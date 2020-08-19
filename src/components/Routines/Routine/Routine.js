import React from 'react';

import * as Styles from './Styles';

const routine = (props) => {
    let squatWeekOne = [];
    let benchWeekOne = [];
    let deadWeekOne = [];
    
    let j=0;

    switch(props.weekNo){
        case 1:
            j=0;
            break;
        case 2:
            j=3;
            break;
        case 3:
            j=6;
            break;
        case 4:
            j=9;
            break;
        case 5:
            j=12;
            break;
        case 6:
            j=15;
            break;
        default: 
            break;
    }
    if(props.squatRoutine.length>0){
        for(let i=j;i<(j+3);i++){
            if(props.squatRoutine[0]==="0x2x6"){
                squatWeekOne.push(<Styles.RoutineItem key={j+i}> </Styles.RoutineItem>)
            }else{
                squatWeekOne.push(<Styles.RoutineItem key={j+i}>{props.squatRoutine[i]}</Styles.RoutineItem>)
            }
        }
    }
    if(props.benchRoutine.length>0){
        for(let i=j;i<(j+3);i++){
            if(props.benchRoutine[0]==="0x3x6"){
                benchWeekOne.push(<Styles.RoutineItem key={j+i}> </Styles.RoutineItem>)
            }else{
                benchWeekOne.push(<Styles.RoutineItem key={j+i}>{props.benchRoutine[i]}</Styles.RoutineItem>)
            }
        }
    }
    if(props.deadRoutine.length>0){
        for(let i=j;i<(j+3);i++){
            if(props.deadRoutine[0]==="0x3x6"){
                deadWeekOne.push(<Styles.RoutineItem key={j+i}> </Styles.RoutineItem>)
            }else{
                deadWeekOne.push(<Styles.RoutineItem key={j+i}>{props.deadRoutine[i]}</Styles.RoutineItem>)
            }
        }
    }
    
    return(
        <tbody>
            <tr style={{backgroundColor: 'grey'}}>
                <Styles.RoutineItem>Week {props.weekNo}</Styles.RoutineItem>
                <Styles.RoutineItem>Day 1</Styles.RoutineItem>
                <Styles.RoutineItem>Day 2</Styles.RoutineItem>
                <Styles.RoutineItem>Day 3</Styles.RoutineItem>
            </tr>
            <tr>
                <Styles.RoutineItem>Squat</Styles.RoutineItem>
                {squatWeekOne}
            </tr>
            <tr>
                <Styles.RoutineItem>Bench</Styles.RoutineItem>
                {benchWeekOne}
            </tr>
            <tr>
                <Styles.RoutineItem>Dead</Styles.RoutineItem>
                {deadWeekOne}
            </tr>
        </tbody>
    )
}

export default routine;