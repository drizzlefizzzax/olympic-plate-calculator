import React from 'react';

const modal = (props) => {
    console.log(props.hide)
    return(
        <div>
            <div style={{backgroundColor: 'white', position: 'absolute', marginLeft: '44%', marginTop: '10%', zIndex: '500', padding: '40px'}}>
                {props.children}
            </div>
            <div onClick={props.hide} style={{backgroundColor: 'black', position: 'absolute', height: '100%', width: '100%', zIndex: '400', opacity: '0.5'}}>
            </div>
        </div>
    );
}
export default modal;