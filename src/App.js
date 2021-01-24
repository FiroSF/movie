/* eslint-disable react/prop-types */ // TODO: upgrade to latest craco+eslint or Next.js?
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.minus2 = this.minus2.bind(this);
  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  minus2() {
    this.setState((current) => ({ count: current.count - 1 }));
  }

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("updated!");
  }

  componentWillUnmount() {
    console.log("bye");
  }

  render() {
    console.log("rendering//././././/./.");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus2}>Minus</button>
      </div>
    );
  }
}

export default App;
