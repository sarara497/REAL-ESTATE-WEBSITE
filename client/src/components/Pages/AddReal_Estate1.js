import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import image from "../../../src/photo/forAdd.jpg"
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
class AddReal_Estate1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            full_Address: '',
            description: '',
            owner_phoneNumber: '',
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
                <div id="Add">
                    <a href="/"><img id="logoAdd" src={logo} /></a>
                    <div id="Add1">
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        <form id="Add2" >
                            <div id="textadd"  >
                                <TextField
                                    id="outlined-name"
                                    className="forText"
                                    label="Full_Address"
                                    name="full_Address"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                /><br /><br />
                                <TextareaAutosize
                                 id="outlined-name"
                                    rowsMax={4}
                                    className="forTextArea"
                                    aria-label="maximum height"
                                    placeholder="Description"
                                    name="description"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                />
                              
                                <br /><br />
                                <TextField
                                    id="outlined-name"
                                    label="Owner_phoneNumber"
                                    name="owner_phoneNumber"
                                    onChange={this.handleChange}
                                    variant="outlined"
                                />
                                <br />

                            </div>  <br />
                            <Button id="forbutton" variant="contained" color="primary">
                                Add
                        </Button>
                            <br />
                            <Button href="AddReal_Estate" id="forbutton" variant="contained" color="primary">
                                Back
                        </Button>
                            <br />
                            <Button href="/" id="forbutton" variant="contained" color="primary">
                                Cancel
                        </Button>
                        </form>


                    </div>
                </div>
            </div>
        )
    }

}

export default AddReal_Estate1;