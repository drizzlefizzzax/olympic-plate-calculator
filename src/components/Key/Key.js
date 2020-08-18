import React from 'react';
// import * as Styles from './Styles';

const key = (props) => {    

    return(
        <div>
            <h3>Key</h3>
            <table>
                <tbody>
                    <tr>
                        <td><div style={{margin: 'auto', backgroundColor: 'red', width: '9px', height: '100px', borderRadius: '5px', borderStyle: 'inset', borderColor: '#e80202'}}></div></td>
                        <td><div style={{width: '10px'}}></div></td>
                        <td><div style={{margin: 'auto', backgroundColor: 'blue', width: '9px', height: '100px', borderRadius: '5px', borderStyle: 'inset', borderColor: '#0000e0'}}></div></td>
                    </tr>
                    <tr>
                        <td>25KG</td>
                        <td></td>
                        <td>20KG</td>
                    </tr>
                {/* <tr><td colSpan="5">Full Plates</td></tr>
                <tr>
                    <td style={{backgroundColor: 'red', width: '9px', height: '50px', borderRadius: '5px', borderStyle: 'inset', borderColor: '#e80202'}}></td>
                    <td>25KG</td>
                    <td style={{width: '9px'}}></td>
                    <td style={{backgroundColor: 'blue', width: '9px', height: '50px', borderRadius: '5px', borderStyle: 'inset', borderColor: '#0000e0'}}></td>
                    <td>20KG</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: 'yellow', width: '9px', height: '50px', borderRadius: '5px', borderStyle: 'inset', borderColor: '#e6e600'}}></td>
                    <td>15KG</td>
                    <td style={{width: '9px'}}></td>
                    <td style={{backgroundColor: 'green', width: '9px', height: '50px'}}></td>
                    <td>10KG</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: 'grey', width: '9px', height: '50px'}}></td>
                    <td>5KG</td>
                </tr>
                <tr><td colSpan="5">Fractional Plates</td></tr>
                <tr>
                    <td style={{backgroundColor: 'red', width: '20px', height: '50%'}}></td>
                    <td>2.5KG</td>
                    <td style={{width: '50px'}}></td>
                    <td style={{backgroundColor: 'yellow', width: '20px', height: '100%'}}></td>
                    <td>1.25KG</td>
                </tr> */}
                </tbody>
            </table>
            
        </div>
    )
}

export default key;