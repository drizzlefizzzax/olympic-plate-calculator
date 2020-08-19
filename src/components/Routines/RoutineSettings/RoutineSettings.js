import React from 'react';

import * as Styles from './Styles';

const routineSettings = (props) => {
    return(
        <Styles.RoutineSettingsContainer>
            <p style={{marginTop: '0px'}}>Routine Settings</p>
            <table style={{margin: 'auto'}}>
                <tbody>
                    <tr>
                        <td>Squat Max:</td>
                        <td><input onChange={props.squatChanged} value={props.squatValue}></input></td>
                    </tr>
                    <tr>
                        <td>Bench Max:</td>
                        <td><input onChange={props.benchChanged} value={props.benchValue}></input></td>
                    </tr>
                    <tr>
                        <td>Deadlift Max:</td>
                        <td><input onChange={props.deadChanged} value={props.deadValue}></input></td>
                    </tr>
                </tbody>
            </table>    
        </Styles.RoutineSettingsContainer>
    )
}

export default routineSettings;