import React from 'react';

import * as Styles from './Styles';

const control = (props) => {
    return(
        <Styles.Control>
            <label>{props.lift}:</label>
            <input onChange={props.change}></input>
        </Styles.Control>
    );
}

export default control;