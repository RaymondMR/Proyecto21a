import React, { Component } from "react";
import "./App.css";
//import Customers from './components/customers';
import Municipios from "./components/municipios.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Municipios Michoacan</h1>
        </header>
        <Municipios />
      </div>
    );
  }
}

export default App;
