import React, { Component } from "react";
import Card from '../SharedComponents/Card_Rreal_Estate'

import './HomeStyle.css'

class Type_Real_Estats extends Component {
    constructor(props) {
      super(props)
      this.state = {
        real_estate: [],
      }
    }
  
    getReal_Estates = () => {
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
       
        };
        fetch(`http://localhost:4000/real-estate/retrieveSpecReal-Estate/${this.state.id_User}` , requestOptions )
          .then(response => response.json())
          .then(data => {
            this.setState({ real_estates : data })
            console.log(data)
          })
      }
  
    render() {
      
      const { real_estate } = this.state
  
      return (
          <div id="cardsPage">
           <div id="cPage" >      
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
  export default Type_Real_Estats;
  

