const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique - validator')


//create the schema 
const User = mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid name '],
        index: true,
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'is invalid Email'],
        index: true,

    },
    password: {
        type: String,
        required: true,
        minlength : 6
    },
    phoneNumber: {
        type: String
    },
    userType: {
        isAdmin: {
            type: Boolean
        },
        isOffice: {
            type: Boolean
        },
        isUser: {
            type: Boolean
        }
    },
    id_real_estate: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Real_Estate'
    }]
})


//create the model 

const User = mongoose.model('User', User)

//export the model

module.exports = User

