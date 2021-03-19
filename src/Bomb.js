// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
  constructor(props){
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render(){
    if (this.state.secondsLeft === 0)
      return 'Boom!'
    else 
      return (<h1>{this.state.secondsLeft} seconds left before I go boom!</h1>)
    
/* -or-
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`};
    return (
      <div>{message}</div>
      )
*/ 
  
  }
}

export default Bomb;