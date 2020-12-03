import './App.css';
import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Frontend ^_^</h1>
        </header>
      </div>
    );
  }
}
export default App;
