import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

import { connect } from 'react-redux';
import Results from "./results";
//import * as actions from '../actions';

export default class App extends Component {

  handleSearchBarSubmit = function ( query ) {
    console.log("trying to handle submit for query", query);
    this.props.history.push("/results");  
  };

  render() {
    return (
      <div>
        <Logo />
        <SearchBar onSubmit={ (query) => this.handleSearchBarSubmit(query)}/>
        <RecentPosts />
        
      </div>
    );
  }
}
