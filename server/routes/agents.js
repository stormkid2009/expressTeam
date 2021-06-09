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
    
    const name = req.body.name;
    const phone = req.body.phone;
    const agentCode = req.body.agentCode;
    const status = req.body.status;

    //fill in our model 
    const newAgent = new Agent({
        
        name,
        phone,
        agentCode,
        status
        
    })

    newAgent.save()
    .then(()=> res.json("new agent has been added successfully!"))
    .catch(err => res.status(400).json("Error : " + err))
})

module.exports = router;