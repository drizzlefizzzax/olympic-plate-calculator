import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import PlateControls from '../../components/PlateControls/PlateControls';
import Plates from '../../components/Plates/Plates';
import Key from '../../components/Key/Key';
import * as Styles from './Styles';

class Layout extends Component{
    state = {
        bench: null,
        squat: null,
        dead: null,
        showRoutine: false,
        weight: 20
    }

    plateControlChangedHandler = (event) => {
        if (!isNaN(event.target.value)){
            this.setState({weight: event.target.value});
        }
    }

    render() {
        let showRoutines = this.state.showRoutine;
        return (
            <Aux>
                <Styles.Centered>
                    <Toolbar />
                    <PlateControls change={this.plateControlChangedHandler} value={this.state.weight}/>
                    <Styles.FlexCentered>
                        <Plates weight={this.state.weight}/>
                    </Styles.FlexCentered>
                    <Styles.FlexCentered>
                        <Key/>
                    </Styles.FlexCentered>
                </Styles.Centered>
            </Aux>
        );
    };
}

export default Layout;