import React, { Component } from "react";
import PropTypes from 'prop-types'

class TodoItem extends Component {
  render() {
    const { content, listData, deleteData } = this.props;
    return (
      <div>
        {listData.map((ele, index) => {
          return (
            <div key={index + "a"}>
              <span>{ele}</span>
              <button onClick={() => deleteData(index)}>删除</button>
            </div>
          );
        })}
      </div>
    );
  }
}
 TodoItem.propTypes = {
    listData:PropTypes.array,
}
export default TodoItem;
