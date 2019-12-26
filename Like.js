import React, { Component } from "react";
import PropTyps from "prop-types";

class Like extends Component {
  static defaultProps = {
    words: {
      likeText: "取消",
      unlikeText: "点赞"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      isLike: false
    };
  }

  render() {
    const {words} = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>
          {this.state.isLike ? words.likeText : words.unlikeText}👍
        </button>
      </div>
    );
  }
  handleClick = () => {
    this.setState(preState => ({
      isLike: !preState.isLike
    }));
  };
}

Like.propTypes = {
  words: PropTyps.object
};
export default Like;
