const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//declare our schema
const agentSchema = new Schema({
    _id:{type:String,required:true},
    name:{type: String, required: true},
    phone:{type:String, required:true},
    status:{type:String ,required:true}
},{
    timestamps: true,
},{_id:false});
//compile our schema into model using mongoose.model
const Agent = mongoose.model('Agent',agentSchema);
module.exports = Agent;