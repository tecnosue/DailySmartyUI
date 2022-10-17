import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar'

class Results extends Component {
  render() {
    return (
      <div>
        <Logo size = {55} />
        <SearchBar />
      </div>
    );
  }
}
export default Results;