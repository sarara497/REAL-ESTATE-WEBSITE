import React, { Component } from "react";
import Card from '../SharedComponents/Card_Rreal_Estate'

import './HomeStyle.css'

class Real_Estats extends Component {
    constructor(props) {
      super(props)
      this.state = {
        real_estate: [],
      }
    }
  
    componentDidMount = () => {
      this.getReal_Estate()
    }

    getReal_Estate = () => {
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };
      fetch('http://localhost:4000/real-estate/retrieveReal-Estate', requestOptions)
        .then(response => response.json())
        .then(data => {
          this.setState({ real_estate : data })
          console.log(data)
        })
    }
  
    render() {
     
      const { real_estate } = this.state
      console.log("real" , real_estate)
  
      return (
          <div id="cardsPage">
           <div id="cPage" >      
            <div  id="cardsPage">
              {
          
                real_estate.map(({ location, is_sale , is_rent , real_type}, index) =>
               
                  <Card location={location} is_sale={is_sale} is_rent={is_rent}  real_type={real_type} key={index} />
                )
              }
  
            </div>
        
        </div>
        </div>
      );
    }
  }
  export default Real_Estats;
  

