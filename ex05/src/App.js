import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import SimpleForm from "./SimpleForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleForm />
      </div>
    );
  }
}

export default App;