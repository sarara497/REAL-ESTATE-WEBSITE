import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import './HomeStyle.css'



import UserReal_Estats from './Retrive_SpecUserRealEstate'
import LogIn_Header from '../SharedComponents/LogIn_Header'
import Footer from '../SharedComponents/Footer'
import Search from '../SharedComponents/Search'

const styles = {
    paperContainer: {

        width: "100%",
        height: "100%"
    },

};



const ProfilePage = ({ username }) => {

    return (
        <div >
            <div id="profile" >
                <Paper >

                    <LogIn_Header />

                </Paper><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <h4 className="wellcom"> The  Place Where You will Find All Real-Estate in Your Hands ♥ !</h4>
            </div>
            <div id="formation" >
            <br /><br />
                <h1 id="username">Hello {username}</h1>
                <br /><br />
                <h3 id="forUser">Your Added Real-Estate :</h3>
                <br /><br />

                <div id="cardsPage">
                    <UserReal_Estats/>
                </div>
            </div>
                <Footer />

        </div>
        )
    }



export default ProfilePage;