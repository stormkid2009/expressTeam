const router = require('express').Router();
let Agent = require('../models/agent.model');

//setup endpoint for get request:
router.route('/').get((req,res)=>{
    Agent.find()
    .then( agents => res.json(agents))
    .catch( err => res.status(400).json("Error" + err))
})

router.route('/add').post((req,res)=>{
    //assign request body to variables
    const _id = req.body._id;
    const name = req.body.name;
    const phone = req.body.phone;
    const status = req.body.status;

    //fill in our model with variables declared above
    const newAgent = new Agent({
        _id,
        name,
        phone,
        status
        
    })
    // save the newAgent object with save method [returns promise with then and catch errors]
    newAgent.save()
    .then(()=> res.json("new agent has been added successfully!"))
    .catch(err => res.status(400).json("Error : " + err))
});
//define our delete end point which find the agent by id and delete it
router.route('/:id').delete((req,res)=>{
    Agent.findByIdAndDelete(req.params.id)
    .then(() => res.json("Agent has been removed successfuly"))
    .catch(err => res.status(400).json("Error: " + err))
});
//define edit or update route with certain id and only update the status of agent
router.route('/update/:id').post((req,res)=>{
    Agent.findById(req.params.id)
    .then(agent=>{
        agent.status = req.body.status;
        agent.save()
        .then(()=> res.json("agent status has been modifyed! "))
        .catch(err => res.status(400).json("Error: " + err))
    })
    .catch(err => res.status(400).json("Error: " + err))
});

module.exports = router;