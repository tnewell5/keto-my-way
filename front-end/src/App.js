import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Keto My Way</h1>
        </header>
        <div className="App-intro">
          <div>Today</div>
          <div>Used:</div>
          <div>Remaining:</div>
          <div>Meals</div>
          <Button className="ui teal">Add Meal</Button>
        </div>
      </div>
    );
  }
}

export default App;
