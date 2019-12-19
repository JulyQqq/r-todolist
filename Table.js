import React, { Component } from "react";

const TableHeader = props => {
  return (
    <thead>
      <tr>
        {props.headerData.map(ele => (
          <th>{ele}</th>
        ))}
      </tr>
    </thead>
  );
};
const TableBody = props => {
  const rows = props.bodyData.map((ele, index) => {
    return (
      <tr key={index + "b"}>
        <td>{ele.name}</td>
        <td>{ele.job}</td>
        <td onClick={() => props.removeObj(index)}>删除</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    const { tableDatas, removeData } = this.props;
    const keyData = Object.keys(tableDatas[0]?tableDatas[0]:[]);
    return (
      <table className="table" align="center">
        <TableHeader headerData={keyData} />
        <TableBody bodyData={tableDatas} removeObj={removeData} />
      </table>
    );
  }
}
export default Table;
