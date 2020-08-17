import React from 'react';

import * as Styles from './Styles';

const plateSettings = (props) => {
    return(
        <tr>
            <td>{props.weight}</td>
            <Styles.TableSpacer />
            <td><button onClick={props.minusClicked}>-</button></td>
            <td>{props.plates}</td>
            <td><button onClick={props.plusClicked}>+</button></td>
        </tr>
    )
}

export default plateSettings;