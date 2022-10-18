import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './searchBar';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {

  handleSearchBarSubmit = function ( query ) {
    this.props.fetchPostsWithQuery(query);
     
  }

  render() {
    return (
      <div>
        <Logo size = {55} />
        <SearchBar onSubmit={ (query) => this.handleSearchBarSubmit(query)} />
      </div>
    );
  }
}
export default connect (null, actions)(Results);