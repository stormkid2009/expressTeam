const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//declare our schema
const resellerSchema = new Schema({
    _id:{type:String,required:true},
    name:{type: String, required: true},
    address:{type:String ,required: true},
    phone:{type:String ,required: true},
    credit:{type:Number,required:true}
    
},{
    timestamps: true,
},{_id:false});
//compile our schema into mongoose.model
const Reseller = mongoose.model('Reseller',resellerSchema);
module.exports = Reseller;