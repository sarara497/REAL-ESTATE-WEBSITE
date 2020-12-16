import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import link from 'react-router-dom'
import axios from "axios"

import image from "../../../src/photo/forSignUP.jpg"
import logo from '../../../src/photo/logo.png'





const styles = {
    paperContainer: {
        backgroundImage: `url(${image})`,
        width: "100%",
        height: "100%"
    },
    root: {
        '& .MuiTextField-root': {
            width: '100ch',
        },
    },
}
class LogIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        this.handelOnClick = this.handelOnClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })

        console.log(value)
    }

    handelOnClick = async (e) => {
        console.log(this.state)
        e.preventDefault();
        axios.post('http://localhost:4000/users/signInUser', this.state)
            .then((response) => {
                localStorage.setItem('isAdmin', response.data.isAdmin)
                localStorage.setItem('isOffice', response.data.isOffice)
                localStorage.setItem('isUser', response.data.isUser)
                localStorage.setItem('userId', response.data.userId)
                localStorage.setItem('username', response.data.username)
          
                window.location.reload()
            })
    }


    render() {

        return (
            <div id="logIn_bg" style={styles.paperContainer}>
                <div id="forLogIn">
                    <a href="/"><img id="logoSi" src={logo} /></a>
                    <form className={styles.root} noValidate autoComplete="off">


                        <br />
                        <div >
                            <TextField
                                id="outlined-name"
                                className="forText"
                                label="Your Email"
                                name="email"
                                onChange={this.handleChange}
                                variant="outlined"
                            /><br /><br /><br />
                            <TextField
                                id="outlined-name"
                                label="Password"
                                name="password"
                                type="password"
                                onChange={this.handleChange}
                                variant="outlined"
                            />

                        </div>
                        <br />
                        <Link id="forget" href="/" >
                            forget Your password ?
                        </Link>

                        <br /><br /><br />
                     <Button Link to="/" onClick={this.handelOnClick} id="forbutton" variant="contained" color="primary">
                            LogIn
                        </Button>
                        <br />
                        <h5 id="h5">
                            You don't have an Account ?    <Link id="sign" href="/SignUp" >
                                SignUp
      </Link>
                        </h5>

                    </form>
                </div>
            </div>
        )
    }

}

export default LogIn;