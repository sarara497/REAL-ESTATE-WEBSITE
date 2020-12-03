const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();

// Connecting with MongoDB
mongoose.connect( process.env.DB_CONNECT,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex: true, useFindAndModify: false
    })
  
    .then(() => console.log('MongoDB Connected ^_^ ...'))
    .catch(err => console.log(err))


    

// express initializations
const app = express()



// MiddleWares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())



// setting up my routs 
app.use('/users' , require('./routes/user'))
app.use('/real-estate' , require('./routes/real-estate'))

app.use((req,res) => {
    res.send('Welcome to Backend')
})

app.listen(4000 , ()=> console.log("iam running on port 4000"))