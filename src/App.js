import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bulb from './screens/bulb/bulb';
import LightBulb from './screens/lightBulb/lightBulb';
import BrokenBulb from './screens/brokenBulb/brokenBulb';

class App extends Component {
  constructor(){
    super();
    this.state={
      bulbOn : false,
      bulbOff : true,
      breakBulb : false
    }
    this.turnOn = this.turnOn.bind(this);
    this.turnOff = this.turnOff.bind(this);
    this.break = this.break.bind(this);
  }
  turnOn(){
    const { bulbOn,bulbOff } = this.state;
      this.setState({bulbOn : true,bulbOff : false});
  }
  turnOff(){
    const { bulbOn,bulbOff } = this.state;
      this.setState({bulbOn : false,bulbOff : true});
  }
  break(){
    const { bulbOn,bulbOff,breakBulb } = this.state;
      this.setState({bulbOn : false,bulbOff : false,breakBulb: true});
  }
  render() {
    const { bulbOn,bulbOff,breakBulb } = this.state;
    return (
      
      <div>
        {bulbOff && <Bulb turnOn={this.turnOn} breakBulb={this.break}></Bulb>}
          {bulbOn && <LightBulb turnOff={this.turnOff} breakBulb={this.break}></LightBulb>}
            {breakBulb && <BrokenBulb></BrokenBulb>}
      </div>
    );
  }
}

export default App;
