const express = require("express");
const {
  getProducts,
  getProduct,
  deleteProduct,
  createProduct,

} = require("../controllers/product");

const sendEmail=require("../utils/send-email")

const router = express.Router();

router.get("/", getProducts);
router.get("/send-email", sendEmail);
router.get("/:id", getProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);






module.exports = router;
