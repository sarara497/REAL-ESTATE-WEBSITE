const express = require('express')
const router = express.Router()
const RealEstate = require('../models/Real-estate')

const User = require('../models/User')

//Add Real-Estate In DataBase
router.post('/addReal_Estate', async (req, res) => {
  console.log("iam here in add real")
  console.log("req.body", req.body)

  const realEstate = new RealEstate({
    location: req.body.location,
    real_type: req.body.real_type,
    area: req.body.area,
    price: req.body.price,
    lowest_price: req.body.lowest_price,
    currency: req.body.currency,
    is_sale: req.body.is_sale,
    is_rent: req.body.is_rent,
    installment: req.body.installment,
    rent_type: req.body.rent_type,
    rent_dure: req.body.rent_dure,
    full_Address: req.body.full_Address,
    description: req.body.description,
    owner_phoneNumber: req.body.owner_phoneNumber,
    user_id: req.body.id_User
  })

  try {
    console.log(" iam in try ")
    //save Real in DB
    const savedReal = realEstate.save();
    consol.log("save Real ", savedReal)
  }
  catch (err) {
    res.status(400).send(err);
  }
})

//Delete One Real-Estate
router.delete('/delete_Real_Estate/:id', async (req, res) => {
  console.log("iam here in delete real")
  let _id = req.params.id
  console.log(_id)
  let deletedRealEstate = await RealEstate.findOne({ _id })
  console.log(deletedReal_Estate)
  RealEstate.deleteOne({ _id })
    .then((realestate) => res.status(200).json(deletedRealEstate))
    .catch((err) => res.status(404).json({ success: false }))
});

//Retrieve One Real-Estate by id
router.get('/retrieveReal-Estate/:id', async (req, res) => {
  console.log("iam here in retrieve one real")
  try {
    const real_estate = await RealEstate.findById(req.params.id)
    res.json(real_estate)
  } catch (err) {
    res.send('Error', err)
  }
})

//Retrieve all Real-Estate 
router.get('/retrieveReal-Estate', async (req, res) => {
  console.log("iam here in retrieve all real")
  await RealEstate.find()
    .exec((err, real_estate) => {
      if (err) return res.status(404).json({ success: false })
      res.status(200).json(real_estate)
    })

});


//Retrieve all Real-Estate for Specific user By His Id
router.get('/retrieveSpecReal-Estate/:id', async (req, res) => {
  console.log("iam here in retrieve all real for Specific user By His Id")
  console.log('user Id', req.params)
  await RealEstate.find()
    .exec((err, real_estate) => {

      if (err) return res.status(404).json({ success: false })
      else {

        var specReal = []
        userId = req.params
        console.log('user Id', req.params)
        for (var i = 0; i < real_estate.length; i++) {
          console.log(real_estate[i].user_id)
          console.log(userId.id)

          var check = real_estate[i].user_id == userId.id
          // console.log(typeof(real_estate[i].user_id),typeof(userId.id))
          if (check) {
            specReal.push(real_estate[i])
            console.log("iam hereeee in ", specReal)
          }
        }

        return res.status(200).json(specReal)
      }
    })


});


//Retrieve all Real-Estate for Specific type
router.get('/retrieveSpecTypeReal-Estate/:id', async (req, res) => {
  console.log("Retrieve all Real-Estate for Specific type = ", req.params.id)
  console.log('type1', req.params.id)
  await RealEstate.find()
    .exec((err, real_estate) => {

      if (err) return res.status(404).json({ success: false })
      else {

        var specReal = []
        type = req.params.id
        console.log('type2', req.params.id)
        for (var i = 0; i < real_estate.length; i++) {
          console.log(real_estate[i].real_type)
          console.log("here", real_estate[i].real_type)

          var check = real_estate[i].real_type == type
          // console.log(typeof(real_estate[i].type),typeof(type.id))
          if (check) {
            specReal.push(real_estate[i])
            console.log("iam hereeee in ", specReal)
          }
        }

        return res.status(200).json(specReal)
      }
    })


});


//update one Real-Estate by id
router.put('/updateReal-Estate/:id', (req, res) => {
  console.log("iam here in update one Real-Estate")
  let _id = req.params.id
  RealEstate.updateOne({ _id }, req.body)
    .exec((err, status) => {
      if (err) return res.status(404).json({ success: false })
      res.status(201).json(req.body)
    })

});


//Retrieve One Real-Estate by Location
router.get('/retrieveRealbyLocation-Estate/:id', async (req, res) => {
  console.log("iam here in retrieve one real   by Location")
  console.log('location', req.params.id)
  await RealEstate.find()
    .exec((err, real_estate) => {

      if (err) return res.status(404).json({ success: false })
      else {

        var specReal = []
        location = req.params.id
        console.log('location2', location)
        for (var i = 0; i < real_estate.length; i++) {
          console.log(real_estate[i].location)
          console.log("here", real_estate[i].location)

          var check = real_estate[i].location === location
           console.log(typeof(real_estate[i].location),typeof(location))
           console.log("check" , check)
          if (check) {
            specReal.push(real_estate[i])
            console.log("iam hereeee in ", specReal)
          }
        }
        console.log("all realEstate in this location =  ", specReal)
        return res.status(200).json(specReal)
      }
    })


});


module.exports = router