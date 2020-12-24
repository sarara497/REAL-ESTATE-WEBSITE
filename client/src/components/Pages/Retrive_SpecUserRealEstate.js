import React, { Component } from "react";
import Card from '../SharedComponents/Card_Rreal_Estate'

import './HomeStyle.css'

class UserReal_Estats extends Component {
    constructor(props) {
      super(props)
      this.state = {
        real_estates:[],
        id_User : localStorage.getItem("userId")
      }
    }
  
    componentDidMount = () => {
      this.getReal_Estates()
    }

    getReal_Estates = () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
     
      };
      fetch(`https://mernrealestateproject.herokuapp.com/real-estate/retrieveSpecReal-Estate/${this.state.id_User}` , requestOptions )
        .then(response => response.json())
        .then(data => {
          this.setState({ real_estates : data })
          console.log(data)
        })
    }
  
    render() {
      
      const { real_estates } = this.state
      console.log(real_estates.length,"b")
  
      return (
          <div id="cardsPage">
           <div id="cPage" >      
            <div  id="cardsPage">
             {
                real_estates.length ?

                 real_estates.map(({_id, real_type, location,isFor , imageUrl} , index) =>
                   <Card _id={_id} real_type={real_type} location={location} isFor={isFor}  imageUrl={imageUrl} key={index} />
                )
                :
                <h1 id="username">You dont Have any real estate</h1>
            
              }
  
            </div>
        
        </div>
        </div>
      );
    }
  }
  export default UserReal_Estats;
  

