import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    const { content, deleteData, index } = this.props;
    return <div onClick={() => deleteData(index)}>{content}</div>;
  }
}
TodoItem.propTypes = {
  listData: PropTypes.array
};
export default TodoItem;
