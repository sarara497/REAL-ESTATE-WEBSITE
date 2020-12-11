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
    icon: {
        borderRadius: '50%',
        width: 16,
        height: 16,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
    }
}
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            phoneNumber: '',
            password: '',
            userType:''

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
                   <a href="/"><img id="logoSi" src={logo} /></a> 
                    <form className={styles.root} noValidate autoComplete="off">
                        <div >
                            <TextField
                                id="outlined-name"
                                className="forText"
                                label="UserName"
                                name="username"
                                onChange={this.handleChange}
                                variant="outlined"
                            /><br /><br /><br />
                            <TextField
                                id="outlined-name"
                                label="Email"
                                name="email"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br /><br /><br />
                            <TextField
                                id="outlined-name"
                                label="Phone Number"
                                name="phoneNumber"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br /><br /><br />
                            <TextField
                                id="outlined-name"
                                label="Password"
                                name="password"
                                onChange={this.handleChange}
                                variant="outlined"
                            />

                        </div>
                        <br />
                        <input className="radio1" type="radio" id="male" onChange={this.handleChange} name="userType" value="User"/>
                        &nbsp;<label id="lab" for="male">User</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input className="radio2" type="radio" id="female" onChange={this.handleChange} name="userType" value="Office"/>
                                &nbsp;<label  id="lab" for="female">Office</label><br/><br />
                                        <Button id="forbutton" variant="contained" color="primary">
                                            SignUp
                        </Button>
                                        <br />
                                        <h5 id="h5">
                                            You  have an Account ?    <Link id="sign" href="/LogIn" >
                                                LogIn
      </Link>
                                        </h5>

                    </form>
                </div>
            </div>
        )
    }

}

export default SignUp;