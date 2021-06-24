const router = require('express').Router();
let Pickup = require('../models/pickup.model');

//setup endpoint for get all the pickups:
router.route('/').get((req,res)=>{
    Pickup.find()
    .then( pickups => res.json(pickups))
    .catch( err => res.status(400).json("Error" + err))
})
//setup the end point of adding new pickup
router.route('/add').post((req,res)=>{
    //assign pickup body to variables
    
    const date = Date.parse(req.body.date);
    const notes = req.body.notes;
    const agentID = req.body.agentID;
    const order1 = req.body.order1;
    const order2 = req.body.order2;
    const order3 = req.body.order3;
    const order4 = req.body.order4;
    const order5 = req.body.order5;
    const order6 = req.body.order6;

    //fill in our model 
    const newPickup = new Pickup({
        
        date,
        notes,
        agentID,
        order1,
        order2,
        order3,
        order4,
        order5,
        order6
        
    })
    //save the newPickup object
    newPickup.save()
    .then(()=> res.json("new pickup has been added successfully!"))
    .catch(err => res.status(400).json("Error : " + err))
});

//setup end point to delete pickup
router.route('/:id').delete((req,res)=>{
    Pickup.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pickup has been removed successfuly"))
    .catch(err => res.status(400).json("Error: " + err))
});

//setup route to update pickup :
router.route('/update/:id').post((req,res) => {
    Pickup.findById(req.params.id)
    .then(pickup => {
        pickup.order1 = req.body.order1; //assign new value to item3 as example here
        pickup.order2 = req.body.order2;
        pickup.order3 = req.body.order3;
        pickup.order4 = req.body.order4;
        pickup.order5 = req.body.order5;
        pickup.order6 = req.body.order6;
        //we will change this later for more flexiablity
        
        //save pickup with updated value
        pickup.save()
        .then(()=> res.json("pickup updated successfully !"))
        .catch(err => res.status(400).json('Error :' + err))
    })
    .catch(err => res.status(400).json('Error :' + err))
});

module.exports = router;