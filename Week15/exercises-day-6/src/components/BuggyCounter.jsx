import { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (prevState.counter + 1 === 5) {
        throw new Error("I crashed!");
      }
      return { counter: prevState.counter + 1 };
    });
  };

  render() {
    return (
      <h1 onClick={this.handleClick}>
        {this.state.counter}
      </h1>
    );
  }
}

export default BuggyCounter;
