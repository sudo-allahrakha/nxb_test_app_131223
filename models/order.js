const mongoose = require('mongoose');


// mongoose Schema and validation 
const orderSchema = new mongoose.Schema({
    orderDate: {type:Date},
    user: {type: mongoose.Types.ObjectId, ref:'User'},
    products:Array,
    orderStatus:{type:String}
  });
  
  const Order = mongoose.model("Order", orderSchema);

  module.exports=Order