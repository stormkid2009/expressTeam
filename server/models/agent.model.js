const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const agentSchema = new Schema({
    _id:{type:String,required:true},
    name:{type: String, required: true},
    phone:{type:String, required:true},
    status:{type:String }
},{
    timestamps: true,
},{_id:false});
const Agent = mongoose.model('Agent',agentSchema);
module.exports = Agent;