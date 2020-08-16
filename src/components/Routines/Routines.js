import React from 'react';

import Routine from './Routine/Routine';

const REP_MODIFIERS = [
    {
        weight: 0.8,
        reps: 'x2 x6'
    },
    {
        weight: 0.8,
        reps: 'x3 x6'
    },
    {
        weight: 0.8,
        reps: 'x4 x6'
    },
    {
        weight: 0.8,
        reps: 'x5 x6'
    },
    {
        weight: 0.8,
        reps: 'x6 x6'
    },
    {
        weight: 0.85,
        reps: 'x5 x5'
    },
    {
        weight: 0.9,
        reps: 'x4 x4'
    },
    {
        weight: 0.95,
        reps: 'x3 x3'
    },
    {
        weight: 1,
        reps: 'x2 x2'
    },
    {
        weight: 1.1,
        reps: 'x1'
    }
];
const routines = (props) => {
    return(
        <div>
        <Routine modifiers={REP_MODIFIERS} weight={props.weights.bench}>Bench</Routine>
        <Routine modifiers={REP_MODIFIERS} weight={props.weights.squat}>Squat</Routine>
        <Routine modifiers={REP_MODIFIERS} weight={props.weights.dead}>Deadlift</Routine>
        </div>
    );
}

export default routines;