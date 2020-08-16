import React from 'react';

const plateControls = (props) => {
    return(
        <div style={{paddingBottom: '30px', paddingTop: '30px'}}>
            <div style={{paddingBottom: '15px'}}>Please enter the weight you wish to calculate</div>
            <input onChange={props.change} value={props.value}></input>
        </div>
    )
}

export default plateControls;