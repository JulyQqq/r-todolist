import React, { Component } from "react";

const users = [
  { username: "Jerry", age: 21, gender: "male" },
  { username: "Tomy", age: 22, gender: "male" },
  { username: "Lily", age: 19, gender: "female" },
  { username: "Lucy", age: 20, gender: "female" }
];

const User = props => {
  return props.users.map((man, index) => {
    return (
      <div key={index+'a'} className="map-div">
        <span>{man.username}</span>
        <span>{man.age}</span>
        <span>{man.gender}</span>
      </div>
    );
  });
};

class MapList extends Component {
  render() {
    return <User users={users} />;
  }
}

export default MapList