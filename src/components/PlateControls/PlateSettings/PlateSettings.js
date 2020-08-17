import React from 'react';

import PlateSetting from './PlateSetting/PlateSetting';

import * as Styles from './Styles';

const plateSettings = (props) => {
    return(
        <Styles.PlateSettingsContainer>
            <p style={{marginTop: '0px'}}>Plate Settings</p>
            <table style={{margin: 'auto'}}>
                <tbody>
                    <PlateSetting
                        weight="25KG"
                        plates={props.plates.twentyfive} 
                        minusClicked={props.minusTwentyFive}
                        plusClicked={props.plusTwentyFive}/>
                    <PlateSetting
                        weight="20KG"
                        plates={props.plates.twenty} 
                        minusClicked={props.minusTwenty}
                        plusClicked={props.plusTwenty}/>
                    <PlateSetting
                        weight="15KG"
                        plates={props.plates.fifteen} 
                        minusClicked={props.minusFifteen}
                        plusClicked={props.plusFifteen}/>
                    <PlateSetting
                        weight="10KG"
                        plates={props.plates.ten} 
                        minusClicked={props.minusTen}
                        plusClicked={props.plusTen}/>
                    <PlateSetting
                        weight="5KG"
                        plates={props.plates.five} 
                        minusClicked={props.minusFive}
                        plusClicked={props.plusFive}/>
                    <PlateSetting
                        weight="2.5KG"
                        plates={props.plates.twopointfive} 
                        minusClicked={props.minusTwoPointFive}
                        plusClicked={props.plusTwoPointFive}/>
                    <PlateSetting
                        weight="1.25KG"
                        plates={props.plates.onepointtwofive} 
                        minusClicked={props.minusOnePointTwoFive}
                        plusClicked={props.plusOnePointTwoFive}/>
                </tbody>
            </table>    
            <p>Note: Plates must be in multiples of 2</p>   
        </Styles.PlateSettingsContainer>
    )
}

export default plateSettings;