import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="logo-main">
        <img
          alt="daily smarty ui image logo big"
          src="/assets/ds_circle_logo.png"
          style={{width: "100px",
            height: "100px" }}
        />
      </div>
    );
  }
}

export default Logo;
