const mongoose = require('mongoose');


// mongoose Schema and validation 
const productSchema = new mongoose.Schema({
    title: {type:String, required:true},
    price: {type: Number, min:[0,'Price is negative, seriously ?']},
    description: {type:String},
    // description: {type:String,required:[true,'Where is the description?']},
    category:{type:mongoose.Types.ObjectId, ref:'Category'},
    rating: Object,
  });
  
  const Product = mongoose.model("Product", productSchema);

  module.exports=Product