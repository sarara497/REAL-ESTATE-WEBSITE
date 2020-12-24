import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from "axios"

import image from "../../../src/photo/forAdd.jpg"
import logo from '../../../src/photo/logo.png'

import IsRent from '../SharedComponents/IfIt_Rent'



const styles = {
    paperContainer: {
        // backgroundImage: `url(${image})`,
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
            isFor:'',
            installment: false,
            rent_type: '',
            rent_dure: '',
            description: '',
            owner_phoneNumber: '',
            full_Address: '',
            image:null,
            imageUrl:null,
            id_User: localStorage.getItem("userId")
        }

        this.handelOnClick = this.handelOnClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this. UploadePhoto=this. UploadePhoto.bind(this)
        
    }
    handleChange = (e) => {
        console.log("here", e.target.checked)
        let { name, value } = e.target;
        this.setState({ [name]: value })

        console.log(value)
    }

    handelOnClick = async (e) => {
        console.log(this.state)
        e.preventDefault();
        axios.post('https://mernrealestateproject.herokuapp.com/real-estate/addReal_Estate', this.state,)
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
            isFor:'',
            installment: false,
            rent_type: '',
            rent_dure: '',
            description: '',
            owner_phoneNumber: '',
            full_Address: '',
            image:null,
            imageUrl:null,
        })

    }
    getRent = (data)=>{
         this.setState({
            rent_type :data.rent_T,
            rent_dure:data.rent_D
        })
    }

    // UploadePhoto = ()=>{
    //     console.log("Files image" , this.state.image)
    //     const formData = new FormData()
    //     formData.append("file" , this.state.image)
    //     formData.append("Photo_RealEstate" , "Real_Estate_Photos")
    //     formData.append('cloud_name', 'dpycouy53');

        
    //     axios.post('https://api.cloudinary.com/v1_1/dpycouy53/image/upload', formData)
    //         .then(response =>{
    //             console.log("response the photo : " ,response.data)
    //             this.setState({imageUrl: response.data.secure_url})
    //         } )
           
    // }


    UploadePhoto = async () => {
        console.log("Files image" , this.state.image)
        const formData = new FormData()
        formData.append("file" , this.state.image)
        formData.append("upload_preset", "Real_Estate_Photos")

        const res = await fetch('https://api.cloudinary.com/v1_1/dpycouy53/image/upload', {
          method: 'POST',
          body: formData
        });
        const file = await res.json();
        console.log("response the photo : ",file);
        this.setState({
            imageUrl: file.secure_url
        })
        const {imageUrl}=this.state
        if(imageUrl){
            alert("Your Photo is Added")
            return 
          }

    }

    // updaterealimage =(obj)=>{
    //     axios.post('' , obj)
    //     .then((response)=>{
    //         console.log("res" , response.data)
    //     })
    // }

    render() {

        var isRent = false
        const {isFor} = this.state.isFor
        const photo = this.state.photo
        if(this.state.isFor === 'Rent'){
            isRent=true
        }
        return (
            <div id="Add_bg" style={styles.paperContainer}>
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
                           <input type="file" onChange={(e)=> this.setState({image:e.target.files[0]})} class="custom-file-input"  multiple="" id="photo" /><br/><br/>
                                <Button id="forbuttonn" onClick={this.UploadePhoto} variant="contained" color="primary">
                           Add Photo </Button>

                          
                        </form>
                        <form id="Add22" >
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
                            <input className="radio2" type="radio" id="sale" onChange={this.handleChange} name="isFor" value="Sale" />
                                   &nbsp;<label id="lab" for="sale">Sale</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                               <input className="radio2" type="radio" id="rent" onChange={this.handleChange} name="isFor" value="Rent" />
                                   &nbsp;<label id="lab" for="rent">Rent</label><br /><br />
                                {
                                   isRent ?
                                        <IsRent getRent={this.getRent}/>
                                        :
                                        <div>
                                        <input className="radio2" type="radio" id="installment" onChange={this.handleChange} name=" installment" value=" true" />
                                        &nbsp;<label id="lab" for="installment">If you accept the installment system , put a check on this item.</label><br /></div>
                                }
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
