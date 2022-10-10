import React, { Component } from "react";
import  reduxForm  from "redux-form";

class SearchBar extends Component {
  render() {
    return (
      <form>
        <input placeholder="Search DailySmarty" />
      </form>
    );
  }
}

export default SearchBar;
