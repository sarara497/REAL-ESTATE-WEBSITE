import './App.css';
import React from 'react'


import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Pages/Home'
import LogIn from './components/Pages/LogIn'
import SignUp from './components/Pages/SignUp'
import AddReal_Estate from './components/Pages/AddReal_Estate'
import Profile from './components/Pages/ProfilePage'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

      email: "",
      isAdmin: localStorage.getItem('isAdmin'),
      isOffice: localStorage.getItem('isOffice'),
      isUser: localStorage.getItem('isUser'),
      userId: localStorage.getItem('userId'),
      username: localStorage.getItem('username')
    }
  }


  componentDidMount = () => {
    // console.log(localStorage.getItem('token'))
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
      }

    };
    fetch('/users/auth', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({email: data.email, isAdmin: data.isAdmin, isOffice: data.isOffice, isUser: data.isUser })
        // console.log(this.state.isAdmin)
        // console.log(this.state.isOffice)
        // console.log(this.state.isUser)
      })
  }


  render() {
    const {userId , username} = this.state
    return (
      <div className="App">



        <Switch>
          <Route path="/" exact render={() => <Home userId={userId} />} />
        
          <Route path="/LogIn" exact render={() => <LogIn />} />
          <Route path="/Profile" exact render={() => <Profile username={username} />} />
          <Route path="/SignUp" exact render={() => <SignUp />} />
          <Route path="/AddReal_Estate" exact render={() =>  userId ?
            <AddReal_Estate userId={userId} /> : <Redirect to='/LogIn' />} />
         
        </Switch>


      </div>
    );
  }
}
export default App;
