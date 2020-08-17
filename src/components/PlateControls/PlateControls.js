import React from 'react';

import settingsImg from '../../Images/settings_512.png';

const plateControls = (props) => {
    const maxWeight = 
        20 +
        (25*(Math.floor(props.plates.twentyfive/2)*2)) +
        (20*(Math.floor(props.plates.twenty/2)*2)) +
        (15*(Math.floor(props.plates.fifteen/2)*2)) +
        (10*(Math.floor(props.plates.ten/2)*2)) +
        (5*(Math.floor(props.plates.five/2)*2)) +
        (2.5*(Math.floor(props.plates.twopointfive/2)*2)) +
        (1.25*(Math.floor(props.plates.onepointtwofive/2)*2));

    return(
        <div style={{paddingBottom: '30px', paddingTop: '30px'}}>
            <img 
                style={{position: 'absolute', right: '0', height: '20%', marginTop: '-25px'}} 
                src={settingsImg} 
                onClick={props.settingsToggle}
                alt='Settings'
            />
            <div style={{paddingBottom: '15px'}}>Enter the weight to calculate</div>
            <input onChange={props.change} value={props.value}></input>
            <p style={{color: 'grey'}}>Max weight: {maxWeight}KG</p>
        </div>
    )
}

export default plateControls;