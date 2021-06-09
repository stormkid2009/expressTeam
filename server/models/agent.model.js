const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const agentSchema = new Schema({
    
    name:{type: String, required: true},
    phone:{type:String, required:true},
    agentCode:{type:String, required:true},
    status:{type:String ,required: true}
},{
    timestamps: true,
});
const Agent = mongoose.model('Agent',agentSchema);
module.exports = Agent;