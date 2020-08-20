import React from 'react';

import Routine from './Routine/Routine';
import * as Styles from './Styles';

import settingsImg from '../../Images/settings_512.png';

const REP_FACTORS = 
[
    {
        factor: 0.8,
        volume: 'x2x6'
    },
    {
        factor: 0.8,
        volume: 'x3x6'
    },
    {
        factor: 0.8,
        volume: 'x4x6'
    },
    {
        factor: 0.8,
        volume: 'x5x6'
    },
    {
        factor: 0.8,
        volume: 'x6x6'
    },
    {
        factor: 0.85,
        volume: 'x5x5'
    },
    {
        factor: 0.9,
        volume: 'x4x4'
    },
    {
        factor: 0.95,
        volume: 'x3x3'
    },
    {
        factor: 1,
        volume: 'x2x2'
    },
    {
        factor: 1.1,
        volume: 'x1'
    }
]

const routines = (props) => {
    let squatRoutine=[];
    let benchRoutine=[];
    let deadRoutine=[];
    for(let i=0;i<REP_FACTORS.length;i++){
        if(i===0){
            squatRoutine.push((2.5*Math.ceil(((props.squatMax*REP_FACTORS[i].factor).toFixed(2))/2.5) + REP_FACTORS[i].volume));
            benchRoutine.push((2.5*Math.ceil(((props.benchMax*REP_FACTORS[i].factor).toFixed(2))/2.5) + REP_FACTORS[i].volume));
            deadRoutine.push((2.5*Math.ceil(((props.deadMax*REP_FACTORS[i].factor).toFixed(2))/2.5) + REP_FACTORS[i].volume));
        } else{
            squatRoutine.push((2.5*Math.ceil(((props.squatMax*REP_FACTORS[i].factor).toFixed(2))/2.5) + REP_FACTORS[i].volume));
            benchRoutine.push((2.5*Math.ceil(((props.benchMax*REP_FACTORS[i].factor).toFixed(2))/2.5) + REP_FACTORS[i].volume));
            deadRoutine.push((2.5*Math.ceil(((props.deadMax*REP_FACTORS[i].factor).toFixed(2))/2.5) + REP_FACTORS[i].volume));
            squatRoutine.push((2.5*Math.ceil(((props.squatMax*REP_FACTORS[0].factor).toFixed(2))/2.5) + REP_FACTORS[0].volume));
            benchRoutine.push((2.5*Math.ceil(((props.benchMax*REP_FACTORS[0].factor).toFixed(2))/2.5) + REP_FACTORS[0].volume));
            deadRoutine.push((2.5*Math.ceil(((props.deadMax*REP_FACTORS[0].factor).toFixed(2))/2.5) + REP_FACTORS[0].volume));
        }
    };

    benchRoutine.shift();
    deadRoutine.shift();

    squatRoutine.pop();
    benchRoutine.pop();
    deadRoutine.pop();

    return(
        <div style={{paddingBottom: '30px', paddingTop: '30px'}}>
            <img 
                style={{position: 'absolute', right: '0', height: '40px', marginTop: '-25px'}} 
                src={settingsImg} 
                onClick={props.settingsToggle}
                alt='Settings'
            />
            <Styles.RoutineTable>
                <Routine weekNo={1} squatRoutine={squatRoutine} benchRoutine={benchRoutine} deadRoutine={deadRoutine} clickDay={props.clickDay}/>
            </Styles.RoutineTable>
            <div style={{height: '20px'}} />
            <Styles.RoutineTable>
                <Routine weekNo={2} squatRoutine={squatRoutine} benchRoutine={benchRoutine} deadRoutine={deadRoutine} clickDay={props.clickDay}/>
            </Styles.RoutineTable>
            <div style={{height: '20px'}} />
            <Styles.RoutineTable>
                <Routine weekNo={3} squatRoutine={squatRoutine} benchRoutine={benchRoutine} deadRoutine={deadRoutine} clickDay={props.clickDay}/>
            </Styles.RoutineTable>
            <div style={{height: '20px'}} />
            <Styles.RoutineTable>
                <Routine weekNo={4} squatRoutine={squatRoutine} benchRoutine={benchRoutine} deadRoutine={deadRoutine} clickDay={props.clickDay}/>
            </Styles.RoutineTable>
            <div style={{height: '20px'}} />
            <Styles.RoutineTable>
                <Routine weekNo={5} squatRoutine={squatRoutine} benchRoutine={benchRoutine} deadRoutine={deadRoutine} clickDay={props.clickDay}/>
            </Styles.RoutineTable>
            <div style={{height: '20px'}} />
            <Styles.RoutineTable>
                <Routine weekNo={6} squatRoutine={squatRoutine} benchRoutine={benchRoutine} deadRoutine={deadRoutine} clickDay={props.clickDay}/>
            </Styles.RoutineTable>
        </div>
        
    )
}

export default routines;