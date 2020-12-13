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
            <div id="home_bg" >
                <div >
                    <Paper >
                    {
                    userId ?
                    <LogIn_Header/>
                     
                        :
                        <Header/>
                }
                    </Paper> 
                </div>
                {/* <Search /> */}
                <REal_Estates/>
                <Footer />

            </div>
        )
    }



export default Home;