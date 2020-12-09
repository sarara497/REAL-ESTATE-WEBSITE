import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

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
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            email: '',
            phoneNumber:'',
            password: '',
        
        }
        // this.handelOnClick = this.handelOnClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (e) => {
        let { name, value } = e.target;
        this.setState({ [name]: value })

        console.log(value)
    }

    //   handelOnClick = async (e) => {
    //     console.log(this.state)
    //     e.preventDefault();   
    //   }


    render() {
        //    const preventDefault = (event) => event.preventDefault();
        return (
            <div id="logIn_bg" style={styles.paperContainer}>
                <div id="forLogIn">
                    <img id="logoSi" src={logo} />
                    <form className={styles.root} noValidate autoComplete="off">
                        <div >
                            <TextField
                                id="outlined-name"
                                className="forText"
                                label="UserName"
                                name="username"
                                onChange={this.handleChange}
                                variant="outlined"
                            /><br /><br />
                            <TextField
                                id="outlined-name"
                                label="Email"
                                name="email"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br /><br />
                            <TextField
                                id="outlined-name"
                                label="Phone Number"
                                name="phoneNumber"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br /><br />
                            <TextField
                                id="outlined-name"
                                label="Password"
                                name="password"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            
                        </div>
                        <br />
                        <Link id="forget" href="/" >
                            forget Your password ?
                        </Link>

                        <br /><br /><br />
                        <Button id="forbutton" variant="contained" color="primary">
                            LogIn
                        </Button>
                        <br />
                        <h5  id="h5">
                            You don't have an Account ?    <Link id="sign" href="/" >
                           SignUp
      </Link>
                        </h5>

                    </form>
                </div>
            </div>
        )
    }

}

export default SignUp;