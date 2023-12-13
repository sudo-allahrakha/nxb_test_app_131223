const Order = require("../models/order");


const getOrders=async (req, res) => {
  try {
    const orders = await Order.find().populate('user').exec();
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
}
  



  
  module.exports ={getOrders}