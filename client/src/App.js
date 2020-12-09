import './App.css';
import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Pages/Home'
import LogIn from './components/Pages/LogIn'
import SignUp from './components/Pages/SignUp'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">



        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/LogIn" exact render={() => <LogIn />} />
          <Route path="/SignUp" exact render={() => <SignUp />} />
        </Switch>


      </div>
    );
  }
}
export default App;
