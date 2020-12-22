import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import '../HomeStyle.css'
import image from "../../../../src/photo/home.jpg"

import Card from '../../SharedComponents/Card_Rreal_Estate'



import Header from '../../SharedComponents/Header'
import LogIn_Header from '../../SharedComponents/LogIn_Header'
import Footer from '../../SharedComponents/Footer'
import Search from '../../SharedComponents/Search'

const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
    },

};



class Rooms extends Component {
    constructor(props) {
        super(props)
        this.state = {
            real_estates: [],
            type:'Room',
            userId: this.props.userId
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
        fetch(`https://mernrealestateproject.herokuapp.com/real-estate/retrieveSpecTypeReal-Estate/${this.state.type}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ real_estates: data })
                console.log(data)
            })
    }
    render() {
        const { userId, real_estates } = this.state
        console.log(real_estates.length, "b")
        return (
            <div >
                <div id="home_bg" >
                    <Paper >
                        {
                            userId ?
                                <LogIn_Header />

                                :
                                <Header />
                        }
                    </Paper><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h4 className="wellcom"> The  Place Where You will Find All Real-Estate in Your Hands ♥ !</h4>

                </div>
                {/* <Search /> */}
                <div  id="formation">
                <br /><br />
                    <h1 id="username">Rooms</h1>
                    <br /><br />
                    <div id="cardsPage">
                        <div id="cPage" >
                            <div id="cardsPage">
                                {
                                    real_estates.length ?

                                        real_estates.map(({ real_type, location, is_sale, is_rent }, index) =>
                                            <Card real_type={real_type} location={location} is_sale={is_sale} is_rent={is_rent} key={index} />
                                        )
                                        :
                                        <h1 id="username">There Is No Rooms</h1>

                                }

                            </div>
                            <br /><br />

                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}



export default Rooms;