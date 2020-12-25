import './App.css';
import React from 'react'


import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Pages/Home'
import LogIn from './components/Pages/LogIn'
import SignUp from './components/Pages/SignUp'
import AddReal_Estate from './components/Pages/AddReal_Estate'
import Profile from './components/Pages/ProfilePage'
import Houses from './components/Pages/Real_EstateType/Houses'
import Apartments from './components/Pages/Real_EstateType/Apartments'
import Building from './components/Pages/Real_EstateType/Building'
import Lands from './components/Pages/Real_EstateType/Lands'
import Offices from './components/Pages/Real_EstateType/Offices'
import Stores from './components/Pages/Real_EstateType/Stores'
import Villas from './components/Pages/Real_EstateType/Villas'
import Rooms from './components/Pages/Real_EstateType/Rooms'
import MoreInfo from './components/Pages/MoreInfor'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

      email: "",
      phoneNumber:'',
      isAdmin: localStorage.getItem('isAdmin'),
      userType: localStorage.getItem('userType'),
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
        'Token': localStorage.getItem('Token')
      }

    };
    fetch('https://mernrealestateproject.herokuapp.com/users/auth', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log("ayth" , data)
        console.log("phone" , data.phoneNumber)
        this.setState({phoneNumber: data.phoneNumber , email: data.email, isAdmin: data.isAdmin, userType: data.userType })
        // console.log("isAdmin" , this.state.isAdmin)
        // console.log("type" , this.state.userType)
      })
  }


  render() {
    const {userId , username , email , phoneNumber} = this.state
    return (
      <div className="App">



        <Switch>
          <Route path="/" exact render={() => <Home userId={userId} />} />
        
          <Route path="/LogIn" exact render={() => <LogIn />} />
          <Route path="/Profile" exact render={() => <Profile email={email} phoneNumber={phoneNumber}  userId={userId} username={username} />} />
          <Route path="/SignUp" exact render={() => <SignUp />} />
          <Route path="/AddReal_Estate" exact render={() =>  userId ?
          <AddReal_Estate userId={userId} /> : <Redirect to='/LogIn' />} />
          <Route path="/Building" exact render={() => <Building   userId={userId}/>} />
          <Route path="/Houses" exact render={() => <Houses  userId={userId}/>} />
          <Route path="/Apartments" exact render={() => <Apartments  userId={userId}/>} />
          <Route path="/Lands" exact render={() => <Lands  userId={userId}/>} />
          <Route path="/Offices" exact render={() => <Offices  userId={userId}/>} />
          <Route path="/Stores" exact render={() => <Stores  userId={userId}/>} />
          <Route path="/Villas" exact render={() => <Villas  userId={userId}/>} />
          <Route path="/Rooms" exact render={() => <Rooms  userId={userId}/>} />
          <Route path="/MoreInfo" exact render={() => <MoreInfo  userId={userId}/>} />
         
        </Switch>


      </div>
    );
  }
}
export default App;
