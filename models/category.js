const mongoose = require('mongoose');


// mongoose Schema and validation 
const categorySchema = new mongoose.Schema({
    title: {type:String, required:true},
    user: {type:mongoose.Types.ObjectId, ref:'User'}
  });
  
  const Category = mongoose.model("Category", categorySchema);

  module.exports=Category