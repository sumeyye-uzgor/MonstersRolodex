import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello sumeyyeeeee!!!!!'
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>its meeee yeeaayy</p>
          <p>{this.state.string}</p>
          <button onClick={() => this.setState({ string: "Hello Andre" })} >Change Text</button>
        </header>
      </div>
    );
  }
}
export default App;