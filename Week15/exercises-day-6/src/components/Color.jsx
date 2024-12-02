import React, { Component } from "react";
import Child from "./Child";

class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("after update")
  }
  shouldComponentUpdate() {
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  handleDelete = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  

  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change color</button>
        {this.state.show && <Child />}
        <button onClick={this.handleDelete}>
          Delete Header
        </button>
      </>
     
    );
  }
}

export default Color;
