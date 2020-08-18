import React from 'react';

const plate = (props) => {    

    let colour = null;
    let borderColour = null;

    switch(props.weight){
        case 25:
            colour = "red";
            borderColour = "#e80202";
            break;
        case 20:
            colour = "blue";
            borderColour = "#0000e0"
            break;
        case 15: 
            colour = "yellow";
            borderColour = "#e6e600"
            break;
        case 10:
            colour = "green";
            borderColour = "#006b00"
            break;
        case 5:
            colour = "grey";
            borderColour = "#707070"
            break;
        case 2.5:
            colour = "red";
            borderColour = "#e80202";
            break;
        case 1.25:
            colour = "yellow";
            borderColour = "#e6e600"
            break;
        default: 
            break;
    }

    let style = {
        margin: 'auto', 
        backgroundColor: colour, 
        width: '9px', 
        height: '100px', 
        borderRadius: '5px', 
        borderStyle: 'inset', 
        borderColor: borderColour
    }

    if (props.fractional){
        style.height = '50px';
    }
    if (props.spacer){
        style = {width: '10px'}
    }

    return(
        <td>
            <div style={style}>
            </div>
        </td>
    )
}

export default plate;