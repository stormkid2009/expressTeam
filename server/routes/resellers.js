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
});

router.route('/:id').delete((req,res)=>{
    Reseller.findByIdAndDelete(req.params.id)
    .then(() => res.json("Reseller has been removed successfuly"))
    .catch(err => res.status(400).json("Error: " + err))
});

router.route('/update/:id').post((req,res)=>{
    Reseller.findById(req.params.id)
    .then(reseller =>{
        reseller.name = req.body.name;
        reseller.phone = req.body.phone;
        reseller.address = req.body.address;
        reseller.resellerCode = req.body.resellerCode;


        reseller.save()
        .then(()=> res.json("reseller info has been modifyed! "))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;