const mongoose = require('mongoose')


//create the schema 
const RealEstate = mongoose.Schema({
    location :{
        type: String,
        required :true
      },
    real_type :{
        type: String,
        required :true
      },
    area: {
          type: String,
          required: true,
      },
    price: {
        type: String,
        required: true,
      },
    lowest_price: {
        type: String,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    isFor: {
      type: String,
      
    },
    installment: {
        type: Boolean,
       
    },
    rent_type: {
        type: String,
        
      },
    rent_dure: {
        type: String,
        
      },
    full_Address: {
        type: String,
        required: true,
      },
    description: {
        type: String,
        required: true,
      },
    
    owner_phoneNumber: {
          type: String,
          required: true,
      },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

//create the model 

const Real_Estate = mongoose.model('Real_Estate' , RealEstate)

//export the model

module.exports = Real_Estate


