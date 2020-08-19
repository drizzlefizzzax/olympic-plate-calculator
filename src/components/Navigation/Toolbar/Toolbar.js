import React from 'react';
import * as Styles from './Styles';


const toolbar = (props) => {
    return(
        <Styles.Heading>
            <div onClick={props.toggleSideBar} style={{position: 'absolute', left: '0', marginTop: '15px', marginLeft: '15px'}}>
                <div style={{width: '35px', height: '5px', backgroundColor: 'black', margin: '6px 0'}}></div>
                <div style={{width: '35px', height: '5px', backgroundColor: 'black', margin: '6px 0'}}></div>
                <div style={{width: '35px', height: '5px', backgroundColor: 'black', margin: '6px 0'}}></div>
            </div>
            <p>{props.heading}</p>
        </Styles.Heading>
    );
}

export default toolbar;