import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Plant from "./Plant";

class App extends Component {
  render() {
    return (
      <div id="App">
        <Plant />
      </div>
    );
  }
}

export default App;
