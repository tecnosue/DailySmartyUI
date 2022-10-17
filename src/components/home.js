import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import RecentPosts from "./recentPosts";

import { connect } from 'react-redux';
import Results from "./results";
//import * as actions from '../actions';

export default class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <SearchBar />
        <RecentPosts />
        
      </div>
    );
  }
}
