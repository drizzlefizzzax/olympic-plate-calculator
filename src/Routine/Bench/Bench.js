import React from 'react';
import styled from 'styled-components';


const Bench = (props) => {
    let bench = [];
    for(let i=0;i<props.routine.length;i++){
        bench.push(<p key={i}>{props.routine[i].weight} {props.routine[i].reps}</p>);
    }
    return(
        <div>
            {bench}
        </div>
    );
}

export default Bench;