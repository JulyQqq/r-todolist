import React, { Component } from "react";
import { render } from "react-dom";
import TodoList from './TodoList';
import Like from "./Like";
import MapList from "./MapList";
import "./style.css";

class Index extends Component {
  constructor() {
    super();
    console.log("construct");
  }
  componentWillMount() {
    console.log("component will mount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <Like words={{ likeText: "已赞", unlikeText: "赞" }} />
        <MapList />
      </div>
    );
  }
  componentDidMount() {
    console.log("component did mount");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
}
render(<TodoList />, document.getElementById("root"));
