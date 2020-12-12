import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from "axios"

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
class AddReal_Estate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            location: '',
            price: '',
            lowest_price: '',
            currency: '',
            real_type: '',
            area: '',
            is_sale: false ,
            is_rent: false ,
            installment:false,
            rent_type: '',
            rent_dure: '',
            description:'',
            owner_phoneNumber:'',
            full_Address:''
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
        axios.post('http://localhost:4000/real-estate/addReal_Estate', this.state)
            .then((response) => {
                console.log(response)
            })
            this.setState({
                location: '',
                price: '',
                lowest_price: '',
                currency: '',
                real_type: '',
                area: '',
                is_sale: false ,
                is_rent: false ,
                installment:false,
                rent_type: '',
                rent_dure: '',
                description:'',
                owner_phoneNumber:'',
                full_Address:''
            })
    
      }



    render() {

        return (
            <div id="logIn_bg" style={styles.paperContainer}>
                <div id="Add">
                    <a href="/"><img id="logoAdd" src={logo} /></a>
                    <div id="Add1">
                        <form id="Add2" >
                            <TextField
                                id="outlined-name"
                                className="forText"
                                label="Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.handleChange}
                                variant="outlined"
                            /><br />
                            <TextField
                                id="outlined-name"
                                label="Price"
                                value={this.state.price}
                                name="price"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                id="outlined-name"
                                label="Lowest_Price"
                                value={this.state.lowest_price}
                                name="lowest_price"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                id="outlined-name"
                                label="Currency"
                                value={this.state.currency}
                                name="currency"
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br />
                            <Button id="forbuttonn" variant="contained" color="primary">


                                <input type="file" name="images[]" class="custom-file-input" multiple="" id="images" />
                                <label class="custom-file-label" for="images" data-browse="Photos">Photos</label>

                                <div class="row">
                                    <div id="image-holder" class="col-sm-12 m-2"></div>
                                </div>

                            </Button>
                        </form>
                        <form id="Add2" >
                            <TextField
                                id="outlined-name"
                                label="Real_Estate Type"
                                name="real_type"
                                value={this.state.real_type}
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br />
                            <TextField
                                id="outlined-name"
                                label="Area"
                                name="area"
                                value={this.state.area}
                                onChange={this.handleChange}
                                variant="outlined"
                            />  <br />
                            <TextField
                                id="outlined-name"
                                className="forText"
                                label="Full_Address"
                                name="full_Address"
                                value={this.state.full_Address}
                                onChange={this.handleChange}
                                variant="outlined"
                            /><br />
                            <TextField
                                id="outlined-name"
                                label="Owner_phoneNumber"
                                name="owner_phoneNumber"
                                value={this.state.owner_phoneNumber}
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                            <br />
                            <TextareaAutosize

                                rowsMax={4}
                                id="forTextArea"
                                aria-label="maximum height"
                                placeholder="Description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                variant="outlined"
                            />
                        </form>
                        <form id="Add2" >
                            <div>
                                <input className="radio1" type="radio" id="male" onChange={this.handleChange} name="is_sale" value="true" />
                                   &nbsp;<label id="lab" for="male">Sale</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               <input className="radio2" type="radio" id="female" onChange={this.handleChange} name="is_rent" value="true" />
                                   &nbsp;<label id="lab" for="female">Rent</label><br /><br />
                                <input className="radio2" type="radio" id="installment" onChange={this.handleChange} name=" installment" value=" true" />
                                      &nbsp;<label id="lab" for="installment">If you accept the installment system , put a check on this item.</label><br />
                                <br /><br />
                            </div>
                            <Button onClick={this.handelOnClick} id="forbuttonn" variant="contained" color="primary">
                                Add
                        </Button>
                            <br />

                            <Button href="/" id="forbuttonn" variant="contained" color="primary">
                                Cancel
                        </Button>

                        </form>

                    </div>
                </div>
            </div>
        )
    }

}

export default AddReal_Estate;
