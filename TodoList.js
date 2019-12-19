import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Table from "./Table";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      list: ["111", "222ll"],
      tableData: [
        { name: "jack", job: "developmenter" },
        { name: "rose", job: "teacher" }
      ]
    };
  }
  render() {
    const { inputVal, list, tableData } = this.state;
    return (
      <div>
        <input value={inputVal} type="text" onChange={this.handleInput} />
        <button onClick={this.handleAdd}>添加</button>
        <div>
          <TodoItem listData={list} deleteData={this.deleteData} />
        </div>
        <Table tableDatas={tableData} removeData={this.removeData} />
      </div>
    );
  }
  handleInput = e => {
    const { value } = e.target;
    this.setState({
      inputVal: value
    });
  };
  handleAdd = () => {
    let { inputVal, list } = this.state;
    this.setState({
      list: [...list, inputVal],
      inputVal: ""
    });
  };
  deleteData = i => {
    let { list } = this.state;
    this.setState({
      list: list.filter((ele, index) => {
        return i !== index;
      })
    });
  };
  removeData = i => {
    let { tableData } = this.state;
    this.setState({
      tableData: tableData.filter((ele, index) => {
        return i !== index;
      })
    });
  };
}
export default TodoList;
