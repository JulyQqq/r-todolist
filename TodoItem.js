import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props){
    super(props)
    
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log("child render");
    const { content, deleteData, index } = this.props;
    return <div onClick={() => deleteData(index)}>{content}</div>;
  }
}
TodoItem.propTypes = {
  listData: PropTypes.array
};
export default TodoItem;
