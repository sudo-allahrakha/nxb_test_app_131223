const mongoose = require('mongoose');


// mongoose Schema and validation 
const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type: String},
    contact: {type:String},
    address: {type:String, required:true},
    isActive: {type:Boolean},
    password: {type:String, required:true}
  });
  
  const User = mongoose.model("User", userSchema);

  module.exports=User