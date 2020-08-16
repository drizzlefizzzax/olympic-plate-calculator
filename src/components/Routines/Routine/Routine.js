import React from 'react';

import * as Styles from './Styles';
const routine = (props) => {
    let routine = [];
    props.modifiers.map((week, index) => {
        if(index !== 0){
            routine.push((week.weight * props.weight) + week.reps);
            if(index !== props.modifiers.length-1){
                routine.push((props.modifiers[0].weight * props.weight) + props.modifiers[0].reps);
            }
        }
        else{
            routine.push((week.weight * props.weight) + week.reps);
        }
        return null;
    })

    const days = routine.map((day) => {
        return <Styles.RoutineItem>{day}</Styles.RoutineItem>
    })
    return(
        <div style={{display: 'inline-block'}}>
            <h1>{props.children}</h1>
            <Styles.RoutineList>
                {days}
            </Styles.RoutineList>
        </div>
    );
}

export default routine;