const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require("dotenv");
dotenv.config();
const path = require('path')

// Connecting with my MongoDB
mongoose.connect(process.env.MONGODB_URI || process.env.DB_CONNECT,
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

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

app.listen(process.env.PORT || 4000 , ()=> console.log("iam running on port 4000"))