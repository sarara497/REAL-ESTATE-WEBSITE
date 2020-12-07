import './App.css';
import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Pages/Home'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Home/>
      </div>
    );
  }
}
export default App;
