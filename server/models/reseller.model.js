const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const resellerSchema = new Schema({
    _id:{type:String,required:true},
    name:{type: String, required: true},
    address:{type:String ,required: true},
    phone:{type:String ,required: true},
    credit:{type:Number,required:true}
    
},{
    timestamps: true,
},{_id:false});
const Reseller = mongoose.model('Reseller',resellerSchema);
module.exports = Reseller;