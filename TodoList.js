import React, { Component } from "react";
import TodoItem from "./TodoItem";
import Table from "./Table";
import Test from "./Test";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: "",
      list: [],
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
        <input
          value={inputVal}
          type="text"
          onChange={this.handleInput}
          ref={input => {
            this.input = input;
          }}
        />
        <button onClick={this.handleAdd}>添加</button>
        <ul>{this.getTodoItem()}</ul>
        {
          // <Test content={this.state.inputVal}/>
          // <Table tableDatas={tableData} removeData={this.removeData} />
        }
      </div>
    );
  }
  componentDidMount() {
    //只会被执行一次  一般放ajax请求
    axios.get("api/todoalaist")
      .then(res => {
        if (res.data.code) {
          this.setState(() => ({
            list: [...res.data]
          }));
        }
      })
      .catch(() => {});
  }
  handleInput = e => {
    // const { value } = e.target;
    const { value } = this.input; //不推荐ref操作dom
    this.setState({
      inputVal: value
    });
  };
  handleAdd = () => {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputVal],
      inputVal: ""
    }));
  };
  handleDelete = i => {
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
  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={item}
          content={item}
          index={index}
          deleteData={this.handleDelete}
        />
      );
    });
  }
}
export default TodoList;
