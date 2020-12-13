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
  
      return (
          <div id="cardsPage">
        <div >
         
                <h3 className="wellcom">The  Place Where you wiLL Find All Real-Estate in Your Hands ♥ !</h3><br /><br />
              
            <div  id="cardsPage">
              {
                real_estate.map(({ real_type, location, is_sale , is_rent}, index) =>
                  <Card type={real_type} location={location} is_sale={is_sale} is_rent={is_rent}  key={index} />
                )
              }
  
            </div>
        
        </div>
        </div>
      );
    }
  }
  export default Real_Estats;
  

