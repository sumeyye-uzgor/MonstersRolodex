// import logo from './logo.svg';
import './App.css';
import { CardList } from "./components/card-list/card-list.component.jsx"
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    }
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(users => this.setState({ monsters: users }))
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default App;