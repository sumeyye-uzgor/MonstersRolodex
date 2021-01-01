// import logo from './logo.svg';
import './App.css';
import { CardList } from "./components/card-list/card-list.component.jsx"
import React, { Component } from 'react';
import { SearchBox } from "./components/search-box/search-box.component"
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    }
    // this.handleChange = this.handleChange.bind(this);
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then(users => this.setState({ monsters: users }))
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  // handleChange(e) {
  //   this.setState({ searchField: e.target.value })
  // }
  // oh no comment
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1 id="main-heading"> Monsters Rolodex </h1>
        <SearchBox placeholder="Search Monsters" handleChange={this.handleChange} />
        < CardList monsters={filteredMonsters} />
      </div>
      //comment for deploying
    );
  }
}
export default App;