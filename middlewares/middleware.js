const jwt = require('jsonwebtoken');
const User = require('../models/User')

const auth = async (req, res, next) => {

    try {
  
      const token = req.header('Token') // token sent from frontend
      console.log(token)
      if (token) {
        const decoded = await jwt.verify(token, 'secret') 
        // console.log(userId)
        const user = await User.findOne({ _id: decoded._id })
        // console.log(user)
        req.user = user
  
        next()
  
      } else {
        throw Error
      }
    } catch {
  
      res.status(401).json({ success: false, text: 'Log in first please' })
    }
  }
  
  
  
  
  module.exports = auth