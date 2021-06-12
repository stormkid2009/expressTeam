const router = require('express').Router();
let Reseller = require('../models/reseller.model');

//setup endpoint for get request:
router.route('/').get((req,res)=>{
    Reseller.find()
    .then( resellers => res.json(resellers))
    .catch( err => res.status(400).json("Error" + err))
})

router.route('/add').post((req,res)=>{
    //assign request body to variables
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const resellerCode = req.body.resellerCode;

    //fill in our model 
    const newReseller = new Reseller({
        name,
        address,
        phone,
        resellerCode
        
    })

    newReseller.save()
    .then(()=> res.json("new Reseller has been added successfully!"))
    .catch(err => res.status(400).json("Error : " + err))
})

module.exports = router;