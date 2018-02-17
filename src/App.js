import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.addNumber = this.addNumber.bind(this);

    this.state = {
      number: 0
    }
  }
  render() {
    return (
      <div>
        <span className="value">{this.state.number}</span>
        <button id="inc" onClick={this.addNumber}>Incrementa</button>
      </div>
    );
  }

  addNumber() {
    this.setState({
      number: this.state.number + 1
    });
  }
}

export default App;
