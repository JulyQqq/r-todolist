import React, { Component } from "react";
import { render } from "react-dom";
// import TodoList from './TodoList';
import Like from "./Like";
import MapList from "./MapList";
import "./style.css";

class Index extends Component {
  render() {
    return (
      <div>
        <Like words={{ likeText: "已赞", unlikeText: "赞" }} />
        <MapList />
      </div>
    );
  }
}
render(<Index />, document.getElementById("root"));
