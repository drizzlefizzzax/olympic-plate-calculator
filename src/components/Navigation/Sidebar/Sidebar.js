import React from 'react';
import * as Styles from './Styles';


const sidebar = (props) => {
    return(
        <div>
            <Styles.Sidebar>
                <ul style={{paddingLeft: '0px'}}>
                    {props.currentPage==="strengthRoutine" ? 
                        <Styles.ActiveLink onClick={props.strengthRoutine}>
                            Russian Strength Routine
                        </Styles.ActiveLink> : 
                        <Styles.Link onClick={props.strengthRoutine}>
                            Russian Strength Routine
                        </Styles.Link>}
                    {props.currentPage==="plateCalculator" ? 
                        <Styles.ActiveLink onClick={props.barbellCalculator}>
                            Barbell Calculator
                        </Styles.ActiveLink> :
                        <Styles.Link onClick={props.barbellCalculator}>
                            Barbell Calculator
                        </Styles.Link>}
                </ul>
            </Styles.Sidebar>
            <Styles.Backdrop onClick={props.toggle}/>
        </div>
    );
}

export default sidebar;