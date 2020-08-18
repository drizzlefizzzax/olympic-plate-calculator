import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import Cookies from 'js-cookie';

import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import PlateControls from '../../components/PlateControls/PlateControls';
import Plates from '../../components/Plates/Plates';
// import Key from '../../components/Key/Key';
import PlateSettings from '../../components/PlateControls/PlateSettings/PlateSettings';
import * as Styles from './Styles';


class Layout extends Component{
    state = {
        plates: {
            twentyfive: 2,
            twenty: 2,
            fifteen: 2,
            ten: 2,
            five: 2,
            twopointfive: 2,
            onepointtwofive: 2
        },
        weight: 20,
        showPlateSettings: false
    }

    componentDidMount(){
        if (Cookies.get('plates')){
            this.setState({plates: JSON.parse(Cookies.get('plates'))});
        }
    }

    componentDidUpdate(){
        Cookies.set('plates', this.state.plates);
    }

    plateControlChangedHandler = (event) => {
        if (!isNaN(event.target.value)){
            this.setState({weight: event.target.value});
        }
    }

    plateControlSettingsToggle = () => {
        this.setState({showPlateSettings: !this.state.showPlateSettings});
    }

    minusTwentyFiveHandler = () => {
        if(this.state.plates.twentyfive > 0){
            this.setState(prevState => {
                let newPlates={...prevState.plates};
                newPlates.twentyfive = newPlates.twentyfive - 1;
                return {plates: newPlates}
            })
        }
    }
    minusTwentyHandler = () => {
        if(this.state.plates.twenty > 0){
            this.setState(prevState => {
                let newPlates={...prevState.plates};
                newPlates.twenty = newPlates.twenty - 1;
                return {plates: newPlates}
            })
        }
    }
    minusFifteenHandler = () => {
        if(this.state.plates.fifteen > 0){
            this.setState(prevState => {
                let newPlates={...prevState.plates};
                newPlates.fifteen = newPlates.fifteen - 1;
                return {plates: newPlates}
            })
        }
    }
    minusTenHandler = () => {
        if(this.state.plates.ten > 0){
            this.setState(prevState => {
                let newPlates={...prevState.plates};
                newPlates.ten = newPlates.ten - 1;
                return {plates: newPlates}
            })
        }
    }
    minusFiveHandler = () => {
        if(this.state.plates.five > 0){
            this.setState(prevState => {
                let newPlates={...prevState.plates};
                newPlates.five = newPlates.five - 1;
                return {plates: newPlates}
            })
        }
    }
    minusTwoPointFiveHandler = () => {
        if(this.state.plates.twopointfive > 0){
            this.setState(prevState => {
                let newPlates={...prevState.plates};
                newPlates.twopointfive = newPlates.twopointfive - 1;
                return {plates: newPlates}
            })
        }
    }
    minusOnePointTwoFiveHandler = () => {
        if(this.state.plates.onepointtwofive > 0){
            this.setState(prevState => {
                let newPlates={...prevState.plates};
                newPlates.onepointtwofive = newPlates.onepointtwofive - 1;
                return {plates: newPlates}
            })
        }
    }

    plusTwentyFiveHandler = () => {
        this.setState(prevState => {
            let newPlates={...prevState.plates};
            newPlates.twentyfive = newPlates.twentyfive + 1;
            return {plates: newPlates}
        })
    }
    plusTwentyHandler = () => {
        this.setState(prevState => {
            let newPlates={...prevState.plates};
            newPlates.twenty = newPlates.twenty + 1;
            return {plates: newPlates}
        })
    }
    plusFifteenHandler = () => {
        this.setState(prevState => {
            let newPlates={...prevState.plates};
            newPlates.fifteen = newPlates.fifteen + 1;
            return {plates: newPlates}
        })
    }
    plusTenHandler = () => {
        this.setState(prevState => {
            let newPlates={...prevState.plates};
            newPlates.ten = newPlates.ten + 1;
            return {plates: newPlates}
        })
    }
    plusFiveHandler = () => {
        this.setState(prevState => {
            let newPlates={...prevState.plates};
            newPlates.five = newPlates.five + 1;
            return {plates: newPlates}
        })
    }
    plusTwoPointFiveHandler = () => {
        this.setState(prevState => {
            let newPlates={...prevState.plates};
            newPlates.twopointfive = newPlates.twopointfive + 1;
            return {plates: newPlates}
        })
    }
    plusOnePointTwoFiveHandler = () => {
        this.setState(prevState => {
            let newPlates={...prevState.plates};
            newPlates.onepointtwofive = newPlates.onepointtwofive + 1;
            return {plates: newPlates}
        })
    }

    render() {
        return (
            <Aux>
                    <Styles.Centered>
                        <Toolbar />
                        <FadeIn>
                            {/* {this.state.showPlateSettings ? <p style={{backgroundColor: 'grey', marginTop:'-0px'}}>Plate Settings</p> : null} */}
                            {this.state.showPlateSettings ? 
                                <PlateSettings 
                                    plates={this.state.plates}
                                    minusTwentyFive={this.minusTwentyFiveHandler}
                                    minusTwenty={this.minusTwentyHandler}
                                    minusFifteen={this.minusFifteenHandler}
                                    minusTen={this.minusTenHandler}
                                    minusFive={this.minusFiveHandler}
                                    minusTwoPointFive={this.minusTwoPointFiveHandler}
                                    minusOnePointTwoFive={this.minusOnePointTwoFiveHandler}
                                    plusTwentyFive={this.plusTwentyFiveHandler}
                                    plusTwenty={this.plusTwentyHandler}
                                    plusFifteen={this.plusFifteenHandler}
                                    plusTen={this.plusTenHandler}
                                    plusFive={this.plusFiveHandler}
                                    plusTwoPointFive={this.plusTwoPointFiveHandler}
                                    plusOnePointTwoFive={this.plusOnePointTwoFiveHandler}
                                    />
                                : null}
                            <PlateControls change={this.plateControlChangedHandler} value={this.state.weight} settingsToggle={this.plateControlSettingsToggle} plates={this.state.plates}/>
                            <Styles.FlexCentered>
                                <Plates weight={this.state.weight} plates={this.state.plates} calcPlates={this.calculatePlatesHandler}/>
                            </Styles.FlexCentered>
                            <Styles.FlexCentered>
                                {/* <Key/> */}
                            </Styles.FlexCentered>
                        </FadeIn>
                    </Styles.Centered>
            </Aux>
        );
    };
}

export default Layout;