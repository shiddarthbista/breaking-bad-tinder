import './App.css';
import React from "react";
import Header from "./components/Header";
import Backpack from "./components/Backpack";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route exact path="/backpack" component={ Backpack }/>
            <Route exact path="/" component= { HomePage } />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
