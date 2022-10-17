import React, { Component } from "react";
import   { connect }   from "react-redux";
import * as actions from '../actions';

class RecentPosts extends Component {

  componentDidMount(){
    this.props.fetchRecentPosts();
  }

  render() {
    return (
      <div className="recent-post">
        <div className="recent-post__wrapper">
          <div className="recent-post__heading">Recent Post</div>
            <ul className="recent-post__post">
              <li>recent post 0</li>
              <li>recent post 1</li>
              <li>recent post 2</li>
            </ul>
        </div>
      </div>
    );
  }
}
export default connect(null, actions)(RecentPosts);
