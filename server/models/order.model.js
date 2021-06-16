const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const orderSchema = new Schema({
    resellerCode:{type: String, required: true},
    item :{type: String, required: true},
    recipientName:{type: String, required: true},
    recipientAddress:{type: String, required: true},
    recipientPhone:{type:String,required:true},
    totalCost:{type: Number, required: true},
    agentID:{type:String},
    agentCommission:{type: Number, required: true},
    expressFee:{type: Number, required: true},
    date:{type: Date},
    status:{type:String},
    notes:{type:String}
},{
    timestamps: true,
});
const Order = mongoose.model('Order',orderSchema);
module.exports = Order;