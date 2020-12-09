import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';

import './HomeStyle.css'
import image from "../../../src/photo/home.jpg"



import Header from '../SharedComponents/Header'
import Footer from '../SharedComponents/Footer'
import Search from '../SharedComponents/Search'

const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
    },

};


class Home extends React.Component {
    render() {


        return (
            <div>
                <div>
                    <Paper id="home_bg" style={styles.paperContainer}>
                        <Header />
                    </Paper> 
                </div>
                {/* <Search /> */}
                <Footer />

            </div>
        )
    }

}

export default Home;