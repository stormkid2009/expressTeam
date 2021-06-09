const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const pickupSchema = new Schema({
    
    date:{type: Date, required: true},
    time:{type:String, required:true},
    agentCode:{type:String ,required: true},
    item1:{type: String, required: true},
    item2:{type: String, required: true},
    item3:{type: String, required: true},
    item4:{type: String, required: true},
    item5:{type: String, required: true}
},{
    timestamps: true,
});
const Pickup = mongoose.model('Pickup',pickupSchema);
module.exports = Pickup;