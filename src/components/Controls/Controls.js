import React from 'react';

import * as Styles from './Styles';
import Control from './Control/Control';
import Aux from '../../hoc/Aux/Aux';

const controls = (props) => {
        return(
            <Styles.ControlPanel>
                <Control change={(event) => props.change(event, 'bench')} lift='Bench' />
                <Control change={(event) => props.change(event, 'squat')} lift='Squat' />
                <Control change={(event) => props.change(event, 'deadlift')} lift='Deadlift' />
                <button>Generate Routine</button>
            </Styles.ControlPanel>
        );
}

export default controls;