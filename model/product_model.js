const mongoose = require ('mongoose');

 const productSchema = mongoose.Schema({
    firstName: String ,       // short heand method
    lastName:{
         type: String,
    },
    email:{
        type: String,
    },
    age:{
        type:Number,
    },
    hobbies:[{type:String}],
    address:{
        line1:String,
        line2:String,
        pincode:Number
    },
    isDelete:{
        type:Boolean,
        default:false
    }
 },{
    versionKey:false,
    timestamps:true
 });

 module.exports = mongoose.model('product', productSchema);