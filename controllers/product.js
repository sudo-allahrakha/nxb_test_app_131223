const Product = require("../models/product")


const getProducts=async (req, res) => {
  try {
    // const products = await Product.find().populate('category').exec();

    const products = await Product.find().populate({ 
      path: 'category',
      populate: {
        path: 'user',
        model: 'User'
      } 
   }).exec();


   
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
  
  const getProduct=async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    try {
      // Todo: check if _id is valid or not
      const product = await Product.findOne({ _id });
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  
  const createProduct=async (req, res) => {
    let productDetails = req.body;
  
    // validate product
  
    if (!productDetails.title){
      return res.status(200).json({error:"product title is missing"});
    }
  
    console.log(productDetails);
    try {
  
      const product = new Product(productDetails);
      await product.save().then(() => {
        res.status(201).json({message:"Product is created", data:product});
      }).catch((err) => {
        res.status(500).json({ err: err.message });
      });
  
    
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }
  
  const deleteProduct=async (req, res) => {
    const _id = req.params.id;
    console.log(_id);
    try {
      // Todo: check if _id is valid or not
      const product = await Product.findOneAndDelete({ _id });
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  }


  
  module.exports ={getProducts,getProduct,deleteProduct,createProduct}