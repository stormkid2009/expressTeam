const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pickupSchema = new Schema({
    
    date:{type: Date, required: true},
    notes:{type:String},
    agentID:{type:String ,required: true},
    order1:{type:String},
    order2:{type:String},
    order3:{type:String},
    order4:{type:String},
    order5:{type:String},
    order6:{type:String}
    
},{
    timestamps: true,
});
const Pickup = mongoose.model('Pickup',pickupSchema);
module.exports = Pickup;