import React, {Component} from 'react';
// import Headline from './Headline/Headline';
// import UserInput from './UserInput/UserInput'
// import Routine from './Routine/Routine';
import Layout from './containers/Layout/Layout';
import './App.css';



class App extends Component {
  // state={
  //   bench: 0,
  //   squat: 0,
  //   deadlift: 0,
  //   showRoutine: false,
  //   multiplicationFactors: [
  //     { weight: 0.8, amount: 'x2x6' },
  //     { weight: 0.8, amount: 'x3x6' },
  //     { weight: 0.8, amount: 'x2x6' },
  //     { weight: 0.8, amount: 'x4x6' },
  //     { weight: 0.8, amount: 'x2x6' },
  //     { weight: 0.8, amount: 'x5x6' },
  //     { weight: 0.8, amount: 'x2x6' },
  //     { weight: 0.8, amount: 'x6x6' },
  //     { weight: 0.8, amount: 'x2x6' },
  //     { weight: 0.85, amount: 'x5x5' },
  //     { weight: 0.8, amount: 'x2x6'}
  //   ],
  //   routine: []
  // }

  // benchChangeHandler = (event) => {
  //   this.setState({
  //     bench: event.target.value
  //   })
  // };
  // squatChangeHandler = (event) => {
  //   this.setState({
  //     squat: event.target.value
  //   })
  // }
  // deadliftChangeHandler = (event) => {
  //   this.setState({
  //     deadlift: event.target.value
  //   })
  // }

  // generateRoutine = () => {
  //   const benchRoutine = [];
  //   const squatRoutine = [];
  //   const deadliftRoutine = [];
  //   this.state.multiplicationFactors.map(factor => {
  //     benchRoutine.push({weight: Math.floor(this.state.bench * factor.weight), reps: factor.amount});
  //     return null;
  //   });
  //   this.state.multiplicationFactors.map(factor => {
  //     squatRoutine.push({weight: Math.floor(this.state.squat * factor.weight), reps: factor.amount});
  //     return null;
  //   });
  //   this.state.multiplicationFactors.map(factor => {
  //     deadliftRoutine.push({weight: Math.floor(this.state.deadlift * factor.weight), reps: factor.amount});
  //     return null;
  //   });
  //   this.setState({
  //     routine: [{type: 'bench', routine: {benchRoutine}}, {type: 'squat', routine: {squatRoutine}}, {type: 'deadlift', routine: {deadliftRoutine}}],
  //     showRoutine: true
  //   })
  // }

  

  render () {
    // let showRoutine = null;
    // const displayRoutine = () => {
    //   if(this.state.showRoutine){
    //     return showRoutine = <Routine routine={this.state.routine}/>
    //   }
    // }

    // showRoutine = displayRoutine();
    return (
      <Layout>
        
      </Layout>
    );
  }
}

export default App;
