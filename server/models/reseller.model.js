const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const resellerSchema = new Schema({
    
    name:{type: String, required: true},
    address:{type:String ,required: true},
    phone:{type:String ,required: true},
    resellerCode:{type:String ,required: true}
},{
    timestamps: true,
});
const Reseller = mongoose.model('Reseller',resellerSchema);
module.exports = Reseller;