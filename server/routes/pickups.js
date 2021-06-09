const router = require('express').Router();
let Pickup = require('../models/pickup.model');

//setup endpoint for get request:
router.route('/').get((req,res)=>{
    Pickup.find()
    .then( pickups => res.json(pickups))
    .catch( err => res.status(400).json("Error" + err))
})

router.route('/add').post((req,res)=>{
    //assign request body to variables
    
    const date = Date.parse(req.body.date);
    const time = req.body.time;
    const agentCode = req.body.agentCode;
    const item1 = req.body.item1;
    const item2 = req.body.item2;
    const item3 = req.body.item3;
    const item4 = req.body.item4;
    const item5 = req.body.item5;

    //fill in our model 
    const newPickup = new Pickup({
        
        date,
        time,
        agentCode,
        item1,
        item2,
        item3,
        item4,
        item5
        
    })

    newPickup.save()
    .then(()=> res.json("new pickup has been added successfully!"))
    .catch(err => res.status(400).json("Error : " + err))
})

//setup route to update pickup :
router.route('/update/:id').post((req,res) => {
    Pickup.findById(req.params.id)
    .then(pickup => {
        pickup.item3 = req.body.item3; //assign new value to item3 as example here
        //we will change this later for more flexiablity
        
        //save pickup with updated value
        pickup.save()
        .then(()=> res.json("pickup updated successfully !"))
        .catch(err => res.status(400).json('Error :' + err))
    })
    .catch(err => res.status(400).json('Error :' + err))
});

module.exports = router;