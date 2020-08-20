import React from 'react';

const modal = (props) => {
    return(
        <div style={{display: 'flex', justifyContent: 'center', justifyItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'white', position: 'absolute', top: '20%', zIndex: '500', paddingTop: '10px', paddingBottom: '30px', paddingLeft: '20px', paddingRight: '20px'}}>
                {props.children}
            </div>
            <div onClick={props.hide} style={{backgroundColor: 'black', position: 'absolute', height: '100%', width: '100%', zIndex: '400', opacity: '0.5'}}>
            </div>
        </div>
    );
}
export default modal;