import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import './Profile.css'



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


{/* <h1 id="username">Hello {username}</h1> */ }
{/* <div id="cardsPage">
                    
                </div> */}
const ProfilePage = ({ username, email }) => {

    return (
        <div >
            <div id="profile" >
                <Paper >
                    <LogIn_Header />
                </Paper>
            </div>

            <div id="formation" >
                {/* <div class="container"> */}
                <main>
                    <div class="row">
                        <div class="left col-lg-4">
                            <div id="forpro">
                                <div class="photo-left">
                                    <img class="photo" src="https://sleepxneckrest.com/wp-content/uploads/2018/11/login-user-icon.png" />
                                </div>
                                <h4 class="name">{username}</h4>
                                <p class="info">05678756758</p><br />
                                <p class="info">{username}@gmail.com</p><br /><br /><br /><br /><br /><br /><br /><br />



                                <div class="right col-lg-8">
                                    <ul class="nav2">
                                        <li>Your Real - Estate</li>
                                    </ul>
                                    <div class="row gallery"><UserReal_Estats /></div>


                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                {/* </div> */}

            </div>
            <Footer />

        </div>
    )
}



export default ProfilePage;