import React from 'react';

import Plate from './Plate/Plate';
// import * as Styles from './Styles';

const key = (props) => {    

    let plates = props.plates;
    let platesList = [];

    for(let i=0;i<plates.length;i++){
        if(plates[i].key === "sleeve"){
            plates.splice(i,1);
        }
    }

    for(let i=0;i<plates.length;i++){
        platesList.push(plates[i].key.substring(0,plates[i].key.length-1))
    }

    platesList.reverse();

    let renderPlates = platesList.map((plate, index) => {
        return <Plate key={index} weight={parseFloat(plate)} fractional={(parseFloat(plate)===2.5||parseFloat(plate)===1.25)}/>
    })
    let spacedRenderPlates = [];

    let renderLabels = platesList.map((plate, index) => {
        return <td key={index}>{plate}KG</td>
    })
    let spacedRenderLabels = [];

    for(let i=0;i<renderPlates.length;i++){
        if(!i%2===0){
            spacedRenderPlates.push(<Plate spacer key={"plate"+i}/>);
            spacedRenderPlates.push(renderPlates[i]);
            spacedRenderLabels.push(<Plate spacer key={"label"+i}/>);
            spacedRenderLabels.push(renderLabels[i]);
        }else{
            spacedRenderPlates.push(renderPlates[i]);
            spacedRenderLabels.push(renderLabels[i]);
        }
    }

    return(
        <div>
            {platesList.length>0 ? <h3>Breakdown</h3> : null}
            <table>
                <tbody>
                    <tr>
                        {spacedRenderPlates}
                    </tr>
                    <tr>
                        {spacedRenderLabels}
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default key;