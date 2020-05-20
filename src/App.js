import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
