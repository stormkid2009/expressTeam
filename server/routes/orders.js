const router = require('express').Router();
let Order = require('../models/order.model');

//setup endpoint for get request:
router.route('/').get((req,res)=>{
    Order.find()
    .then( orders => res.json(orders))
    .catch( err => res.status(400).json("Error" + err))
})

router.route('/add').post((req,res)=>{
    //assign request body to variables
    const resellerCode = req.body.resellerCode;
    const item = req.body.item;
    const recipientName = req.body.recipientName;
    const recipientAddress = req.body.recipientAddress;
    const recipientPhone = req.body.recipientPhone;
    const totalCost = Number(req.body.totalCost);
    const agentID = req.body.agentID;
    const agentCommission = Number(req.body.agentCommission);
    const expressFee = Number(req.body.expressFee);
    const date = Date.parse(req.body.date);
    const status = req.body.status;
    const notes = req.body.notes;

    //fill in our model 
    const newOrder = new Order({
        resellerCode,
        item ,
        recipientName,
        recipientAddress,
        recipientPhone,
        totalCost,
        agentID,
        agentCommission,
        expressFee,
        date,
        status,
        notes
    })

    newOrder.save()
    .then(()=> res.json(" new Order has been added successfully!"))
    .catch(err => res.status(400).json("Error : " + err))
})

//setup route to get exercise by id 
router.route('/:id').get((req,res) => {
    Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(err => res.status(400).json('Error :' + err))
});

//setup route to delete Request 
router.route('/:id').delete((req,res) => {
    Order.findByIdAndDelete(req.params.id)
    .then(()=> res.json("Order has been  Deleted !"))
    .catch(err => res.status(400).json('Error :' + err))
});

//setup route to update pickup :
router.route('/date/:id').post((req,res) => {
    Order.findById(req.params.id)
    .then(order => {
        order.date = Date.parse(req.body.date);   //update to charge date
        //save order with updated value
        order.save()
        .then(()=> res.json("order date has been updated successfully !"))
        .catch(err => res.status(400).json('Error :' + err))
    })
    .catch(err => res.status(400).json('Error :' + err))
});

router.route('/agentID/:id').post((req,res) => {
    Order.findById(req.params.id)
    .then(order => {
        
        order.agentID = req.body.agentID; //assign new value to agent ID
           
        //save order with updated value
        order.save()
        .then(()=> res.json("order agent ID has been updated successfully !"))
        .catch(err => res.status(400).json('Error :' + err))
    })
    .catch(err => res.status(400).json('Error :' + err))
});

router.route('/status/:id').post((req,res) => {
    Order.findById(req.params.id)
    .then(order => {
        order.status = req.body.status; //assign new value to status
        
        //save order with updated value
        order.save()
        .then(()=> res.json("order status has been updated successfully !"))
        .catch(err => res.status(400).json('Error :' + err))
    })
    .catch(err => res.status(400).json('Error :' + err))
});

module.exports = router;