import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      catArray: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ catArray: users }));
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { catArray, searchField } = this.state;
    const filteredCatArray = catArray.filter(cat =>
      cat.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Beautiful Cats</h1>
        <SearchBox 
          placeholder = 'search cats'
          onSearchChange={this.onSearchChange} 
        />
        <CardList catArray={filteredCatArray} />
      </div>
    );
  }
}

export default App;