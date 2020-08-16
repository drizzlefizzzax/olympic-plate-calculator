import React from 'react';
// import * as Styles from './Styles';

const key = (props) => {
    return(
        <div>
            <h3>Key</h3>
            <table>
                <tbody>
                <th colSpan="5">Full Plates</th>
                <tr>
                    <td style={{backgroundColor: 'red', width: '20px', height: '100%'}}></td>
                    <td>25KG</td>
                    <td style={{width: '50px'}}></td>
                    <td style={{backgroundColor: 'blue', width: '20px', height: '100%'}}></td>
                    <td>20KG</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: 'yellow', width: '20px', height: '100%'}}></td>
                    <td>15KG</td>
                    <td style={{width: '50px'}}></td>
                    <td style={{backgroundColor: 'green', width: '20px', height: '100%'}}></td>
                    <td>10KG</td>
                </tr>
                <tr>
                    <td style={{backgroundColor: 'grey', width: '20px', height: '100%'}}></td>
                    <td>5KG</td>
                </tr>
                <th colSpan="5">Fractional Plates</th>
                <tr>
                    <td style={{backgroundColor: 'red', width: '20px', height: '50%'}}></td>
                    <td>2.5KG</td>
                    <td style={{width: '50px'}}></td>
                    <td style={{backgroundColor: 'green', width: '20px', height: '100%'}}></td>
                    <td>10KG</td>
                </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default key;