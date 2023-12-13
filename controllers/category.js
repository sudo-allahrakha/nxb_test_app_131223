const Category = require("../models/category");


const getCategories=async (req, res) => {
  try {
    const categories = await Category.find().populate('user').exec();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
  



  
  module.exports ={getCategories}