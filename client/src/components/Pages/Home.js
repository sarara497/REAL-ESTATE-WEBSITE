import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import './HomeStyle.css'
import image from "../../../src/photo/home.jpg"



import Header from '../SharedComponents/Header'
import LogIn_Header from '../SharedComponents/LogIn_Header'
import Footer from '../SharedComponents/Footer'
import REal_Estates from './Retrive_Real'
import Search from '../SharedComponents/Search'

const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
    },

};



 const Home  = ({userId})=>{
   
        return (
            <div >
                <div id="home_bg" >
                    <Paper >
                    {
                    userId ?
                    <LogIn_Header/>
                     
                        :
                        <Header/>
                    }
                    </Paper><br/><br /><br /><br /><br /><br /><br /><br /><br />
                    <h4 className="wellcom"> The  Place Where You will Find All Real-Estate in Your Hands ♥ !</h4>

                </div>
                {/* <Search /> */}
                <div id="forh" ><REal_Estates/></div> 
                <Footer />

            </div>
        )
    }



export default Home;