const express = require('express')
const router = express.Router()
const RealEstate = require('../models/Real-estate')

//Add Real-Estate In DataBase
router.post('/addReal_Estate',  (req, res) => {
    console.log("iam here in add real" )
    console.log("req.body" , req.body )

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
    })

    try {
      //save Real in DB
      console.log("iam in try " , realEstate)
      const savedReal =  realEstate.save();
      consol.log("save Real " , savedReal)
  }
  catch (err) {
      res.status(400).send(err);
  }
  })

//Delete One Real-Estate
router.delete('/delete_Real_Estate/:id', async (req, res) => {
    console.log("iam here in delete real" )
    let _id = req.params.id
    console.log(_id)
    let deletedRealEstate = await RealEstate.findOne({_id}) 
    console.log(deletedReal_Estate)
    RealEstate.deleteOne({ _id })
    .then(( realestate ) => res.status(200).json(deletedRealEstate) )
    .catch((err) => res.status(404).json({success:false}))
  });

  //Retrieve One Real-Estate by id
  router.get('/retrieveReal-Estate/:id',async(req,res)=> {
    console.log("iam here in retrieve one real" )
    try{
     const real_estate = await RealEstate.findById(req.params.id)
     res.json(real_estate)
    }catch(err){
     res.send('Error' , err)
    } 
  })
  
  //Retrieve all Real-Estate 
  router.get('/retrieveReal-Estate',(req, res)=> {
    console.log("iam here in retrieve all real" )
    RealEstate.find()
        .exec( (err,real_estate) => {
            if(err) return res.status(404).json({success:false})
            res.status(200).json(real_estate)
        } )
  
  });
  

//update one Real-Estate by id
  router.put('/updateReal-Estate/:id',(req, res)=>{
    console.log("iam here in update one Real-Estate" )
    let _id = req.params.id
    RealEstate.updateOne({ _id } , req.body)
        .exec((err,status ) => {
            if(err) return res.status(404).json({success:false})
            res.status(201).json(req.body)
        })
    
  });

 
  
module.exports = router