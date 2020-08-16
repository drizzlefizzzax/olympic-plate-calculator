import React from 'react';
import * as Styles from './Styles';

const plates = (props) => {
    const plates = [];
    let weight=props.weight;
    let sleeve=140;
    if(weight>20){
        weight = (weight-20)/2;
        if((weight-25)>=0){
            plates.push(<Styles.RedPlate key='25'></Styles.RedPlate>);
            weight-=25;
            sleeve-=15;
        }
        if((weight-20)>=0){
            plates.push(<Styles.BluePlate key='20'></Styles.BluePlate>);
            weight-=20;
            sleeve-=15;
        }
        if((weight-15)>=0){
            plates.push(<Styles.YellowPlate key='15'></Styles.YellowPlate>);
            weight-=15;
            sleeve-=15;
        }
        if((weight-10)>=0){
            plates.push(<Styles.GreenPlate key='10'></Styles.GreenPlate>);
            weight-=10;
            sleeve-=15;
        }
        if((weight-5)>=0){
            plates.push(<Styles.GreyPlate key='5'></Styles.GreyPlate>);
            weight-=5;
            sleeve-=15;
        }
        if((weight-2.5)>=0){
            plates.push(<Styles.RedFracPlate key='2.5'></Styles.RedFracPlate>);
            weight-=2.5;
            sleeve-=15;
        }
        if((weight-1.25)>=0){
            plates.push(<Styles.YellowFracPlate key='1.25'></Styles.YellowFracPlate>);
            weight-=1.25;
            sleeve-=15;
        }
    }
    

    //add empty sleeve space to plates
    plates.push(<Styles.Sleeve width={sleeve + 'px'} key='sleeve'/>)

    //swap order of plates for left side of bar
    const reversedPlates = [...plates].reverse();

    return(
        <div style={{display: 'flex', alignItems: 'center'}}>
            {reversedPlates}
            {plates.length>0 ? 
                <Styles.Bar /> : 
                weight===20 ?
                <Styles.Bar /> :
                null}
            {plates}
        </div>
    )
}

export default plates;