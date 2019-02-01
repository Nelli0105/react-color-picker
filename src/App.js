import React, { Component } from 'react';
import './App.css';
import Range from "./range";
import Shade from "./shade"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      r: 0,
      g: 0,
      b: 0
    };
  }
  change = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
  render() {
    const {r, g, b} = this.state;
    const color = `rgb(${r}, ${g}, ${b})`
    return (
      <div className="App">
        <div style={{height: 150, width: 150, backgroundColor: color, margin: "0 auto", marginTop:50}}/>
        {
          Object.values(this.state).every(color => color !== 0) || Object.values(this.state).every(color => color !== 255) ? <Shade r={this.state.r} g={this.state.g} b={this.state.b}/> : null
        }
        {
          ["r", "g", "b"].map(color => (
            <Range key={color} color={color} value={this.state[color]} onChange={this.change}/>
          ))
        }
      </div>
    );
  }
}

export default App;