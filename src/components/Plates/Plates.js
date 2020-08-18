import React from 'react';

import Key from '../Key/Key';
import * as Styles from './Styles';

const plates = (props) => {
    const plates = [];
    let weight=props.weight;
    let sleeve=140;
    if(weight>20){
        weight = (weight-20)/2;
        for(let i=0;i<(Math.floor(props.plates.twentyfive/2));i++){
            if((weight-25)>=0){
                plates.push(<Styles.RedPlate key={"25" + i}></Styles.RedPlate>);
                weight-=25;
                sleeve-=15;
            }
        }
        for(let i=0;i<(Math.floor(props.plates.twenty/2));i++){
            if((weight-20)>=0){
                plates.push(<Styles.BluePlate key={"20" + i}></Styles.BluePlate>);
                weight-=20;
                sleeve-=15;
            }
        }
        for(let i=0;i<(Math.floor(props.plates.fifteen/2));i++){
            if((weight-15)>=0){
                plates.push(<Styles.YellowPlate key={"15" + i}></Styles.YellowPlate>);
                weight-=15;
                sleeve-=15;
            }
        }
        for(let i=0;i<(Math.floor(props.plates.ten/2));i++){
            if((weight-10)>=0){
                plates.push(<Styles.GreenPlate key={"10" + i}></Styles.GreenPlate>);
                weight-=10;
                sleeve-=15;
            }
        }
        for(let i=0;i<(Math.floor(props.plates.five/2));i++){
            if((weight-5)>=0){
                plates.push(<Styles.GreyPlate key={"5" + i}></Styles.GreyPlate>);
                weight-=5;
                sleeve-=15;
            }
        }
        for(let i=0;i<(Math.floor(props.plates.twopointfive/2));i++){
            if((weight-2.5)>=0){
                plates.push(<Styles.RedFracPlate key={"2.5" + i}></Styles.RedFracPlate>);
                weight-=2.5;
                sleeve-=15;
            }
        }
        for(let i=0;i<(Math.floor(props.plates.onepointtwofive/2));i++){
            if((weight-1.25)>=0){
                plates.push(<Styles.YellowFracPlate key={"1.25" + i}></Styles.YellowFracPlate>);
                weight-=1.25;
                sleeve-=15;
            }
        }
    }
    

    //add empty sleeve space to plates
    plates.push(<Styles.Sleeve width={sleeve + 'px'} key='sleeve'/>)

    //swap order of plates for left side of bar
    const reversedPlates = [...plates].reverse();

    let paddingTop = '0px';
    let onlyFractionalPlatesOnBar = false;
    let fractionalPlatesOnBar = 0;

    for(let i=0;i<plates.length;i++){
        if(Number(plates[i].key)===2.5||Number(plates[i].key)===1.25){
            fractionalPlatesOnBar +=1;
        }
    }

    if(fractionalPlatesOnBar===plates.length-1){
        onlyFractionalPlatesOnBar = true;
    }

    if (Number(props.weight)<=22.4){
        paddingTop = '42px';
    } else if(onlyFractionalPlatesOnBar){
        paddingTop = '25px';
    }
    const emptyBarToggleStyle = {display: 'flex', alignItems: 'center', paddingTop: paddingTop}


    return(
        <div>
            {/* <div style={{display: 'flex', alignItems: 'center'}}> */}
            <div style={emptyBarToggleStyle}>
                {reversedPlates}
                {plates.length>0 ? 
                    <Styles.Bar /> : 
                    weight===20 ?
                    <Styles.Bar /> :
                    null}
                {plates}
            </div>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Key plates={reversedPlates}/>
            </div>
        </div>
    )
}

export default plates;