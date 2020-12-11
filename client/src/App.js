import './App.css';
import React from 'react'

import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Pages/Home'
import LogIn from './components/Pages/LogIn'
import SignUp from './components/Pages/SignUp'
import AddReal_Estate from './components/Pages/AddReal_Estate'
import AddReal_Estate1 from './components/Pages/AddReal_Estate1'

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
          <Route path="/AddReal_Estate" exact render={() => <AddReal_Estate />} />
          <Route path="/AddReal_Estate1" exact render={() => <AddReal_Estate1 />} />
        </Switch>


      </div>
    );
  }
}
export default App;
