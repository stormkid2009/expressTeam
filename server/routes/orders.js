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
    const resellerID = req.body.resellerID;
    const item = req.body.item;
    const itemFormat = req.body.itemFormat;
    const recipientName = req.body.recipientName;
    const recipientAddress = req.body.recipientAddress;
    const recipientPhone = req.body.recipientPhone;
    const totalCost = Number(req.body.totalCost);
    const paymentFormat = req.body.paymentFormat;
    const agentID = req.body.agentID;
    const agentCommission = Number(req.body.agentCommission);
    const expressFee = Number(req.body.expressFee);
    const date = Date.parse(req.body.date);
    const duration = Number(req.body.duration);
    const status = req.body.status;

    //fill in our model 
    const newOrder = new Order({
        resellerID,
        item ,
        itemFormat,
        recipientName,
        recipientAddress,
        recipientPhone,
        totalCost,
        paymentFormat,
        agentID,
        agentCommission,
        expressFee,
        date,
        duration,
        status
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

module.exports = router;