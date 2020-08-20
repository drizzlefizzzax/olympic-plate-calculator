import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import Cookies from 'js-cookie';

import Aux from '../../hoc/Aux/Aux';
import Modal from '../../hoc/Modal/Modal';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import PlateControls from '../../components/PlateControls/PlateControls';
import Plates from '../../components/Plates/Plates';
import PlateSettings from '../../components/PlateControls/PlateSettings/PlateSettings';
import Routines from '../../components/Routines/Routines';
import RoutineSettings from '../../components/Routines/RoutineSettings/RoutineSettings';
import Key from '../../components/Key/Key';
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
        showSettings: false,
        currentPage: "strengthRoutine",
        squatMax: 0,
        benchMax: 0,
        deadMax: 0,
        showSideBar: false,
        showModal: false,
        modalElement: null
    }

    componentDidMount(){
        if (Cookies.get('plates')){
            this.setState({plates: JSON.parse(Cookies.get('plates'))});
        }
        if (Cookies.get('squatMax')){
            this.setState({squatMax: JSON.parse(Cookies.get('squatMax'))});
        }
        if (Cookies.get('benchMax')){
            this.setState({benchMax: JSON.parse(Cookies.get('benchMax'))});
        }
        if (Cookies.get('deadMax')){
            this.setState({deadMax: JSON.parse(Cookies.get('deadMax'))});
        }
    }

    componentDidUpdate(){
        Cookies.set('plates', this.state.plates, { expires: 365});
        Cookies.set('squatMax', this.state.squatMax, { expires: 365});
        Cookies.set('benchMax', this.state.benchMax, { expires: 365});
        Cookies.set('deadMax', this.state.deadMax, { expires: 365});
    }

    plateControlChangedHandler = (event) => {
        if (!isNaN(event.target.value)){
            this.setState({weight: event.target.value});
        }
    }

    settingsToggle = () => {
        this.setState({showSettings: !this.state.showSettings});
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

    squatChangedHandler = (event) => {
        if (!isNaN(event.target.value)){
            this.setState({squatMax: event.target.value});
        }
    }
    benchChangedHandler = (event) => {
        if (!isNaN(event.target.value)){
            this.setState({benchMax: event.target.value});
        }
    }
    deadChangedHandler = (event) => {
        if (!isNaN(event.target.value)){
            this.setState({deadMax: event.target.value});
        }
    }

    toggleSideBarHandler = () => {
        this.setState({showSideBar: !this.state.showSideBar});
    }

    strengthRoutineSidebarHandler = () => {
        this.setState({
            showSideBar: false,
            currentPage: "strengthRoutine"
        });
    }

    barbellCalculatorSidebarHandler = () => {
        this.setState({
            showSideBar: false,
            currentPage: "plateCalculator"
        });
    }

    hideModalHandler = () => {
        this.setState({showModal: false})
    }

    clickRoutineWeightHandler = (event) => {
        let weight = event.target.innerHTML.substring(0,event.target.innerHTML.indexOf("x"));
        const plates = [];
        if(weight>20){
            weight = (weight-20)/2;
            for(let i=0;i<(Math.floor(this.state.plates.twentyfive/2));i++){
                if((weight-25)>=0){
                    plates.push(<Styles.RedPlate key={"25" + i}></Styles.RedPlate>);
                    weight-=25;
                }
            }
            for(let i=0;i<(Math.floor(this.state.plates.twenty/2));i++){
                if((weight-20)>=0){
                    plates.push(<Styles.BluePlate key={"20" + i}></Styles.BluePlate>);
                    weight-=20;
                }
            }
            for(let i=0;i<(Math.floor(this.state.plates.fifteen/2));i++){
                if((weight-15)>=0){
                    plates.push(<Styles.YellowPlate key={"15" + i}></Styles.YellowPlate>);
                    weight-=15;
                }
            }
            for(let i=0;i<(Math.floor(this.state.plates.ten/2));i++){
                if((weight-10)>=0){
                    plates.push(<Styles.GreenPlate key={"10" + i}></Styles.GreenPlate>);
                    weight-=10;
                }
            }
            for(let i=0;i<(Math.floor(this.state.plates.five/2));i++){
                if((weight-5)>=0){
                    plates.push(<Styles.GreyPlate key={"5" + i}></Styles.GreyPlate>);
                    weight-=5;
                }
            }
            for(let i=0;i<(Math.floor(this.state.plates.twopointfive/2));i++){
                if((weight-2.5)>=0){
                    plates.push(<Styles.RedFracPlate key={"2.5" + i}></Styles.RedFracPlate>);
                    weight-=2.5;
                }
            }
            for(let i=0;i<(Math.floor(this.state.plates.onepointtwofive/2));i++){
                if((weight-1.25)>=0){
                    plates.push(<Styles.YellowFracPlate key={"1.25" + i}></Styles.YellowFracPlate>);
                    weight-=1.25;
                }
            }
        }

        const reversedPlates = [...plates].reverse();

        let newModalElement = 
            <Key plates={reversedPlates}/>
        this.setState({showModal: true, modalElement: newModalElement})
    }

    render() {
        let plateCalculator = null;
        let strengthRoutine = null;
        if(this.state.currentPage === "plateCalculator"){
            plateCalculator = 
            <FadeIn>
                {this.state.showSettings ? 
                    <Styles.FadeInSettings><PlateSettings 
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
                        /></Styles.FadeInSettings>
                    : null}
                <PlateControls change={this.plateControlChangedHandler} value={this.state.weight} settingsToggle={this.settingsToggle} plates={this.state.plates}/>
                <Styles.FlexCentered>
                    <Plates weight={this.state.weight} plates={this.state.plates} calcPlates={this.calculatePlatesHandler}/>
                </Styles.FlexCentered>
            </FadeIn>
        }

        if(this.state.currentPage === "strengthRoutine"){
            strengthRoutine = 
            <FadeIn>
                {this.state.showSettings ? 
                    <Styles.FadeInSettings><RoutineSettings squatChanged={this.squatChangedHandler} 
                        squatValue={this.state.squatMax} 
                        benchChanged={this.benchChangedHandler} 
                        benchValue={this.state.benchMax} 
                        deadChanged={this.deadChangedHandler} 
                        deadValue={this.state.deadMax}/></Styles.FadeInSettings>
                    : null}
                <Styles.FlexCentered>
                    <Routines settingsToggle={this.settingsToggle} squatMax={this.state.squatMax} benchMax={this.state.benchMax} deadMax={this.state.deadMax} clickDay={this.clickRoutineWeightHandler}/>
                </Styles.FlexCentered>
            </FadeIn>
        }

        return (
            <Aux>
                    {this.state.showModal ? <Modal hide={this.hideModalHandler}>{this.state.modalElement}</Modal>:null}
                    {this.state.showSideBar ? <Styles.FadeInSettings><Sidebar toggle={this.toggleSideBarHandler} strengthRoutine={this.strengthRoutineSidebarHandler} barbellCalculator={this.barbellCalculatorSidebarHandler} currentPage={this.state.currentPage}/></Styles.FadeInSettings>: null}
                    <Styles.Centered>
                        <Toolbar 
                        heading={this.state.currentPage==="strengthRoutine" ? "Russian Strength Routine" : "Olympic Barbell Plate Calculator"}
                        toggleSideBar={this.toggleSideBarHandler}
                        />
                        {plateCalculator}
                        {strengthRoutine}
                    </Styles.Centered>
            </Aux>
        );
    };
}

export default Layout;