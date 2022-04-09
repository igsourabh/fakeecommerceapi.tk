const express = require("express");
const Products = require("../model/productSchema");

const dotenv = require("dotenv");
const fetchuser = require("../middleware/fetchuser");

const router = express.Router();
// get all products
router.get("/", async (req, res) => {
  try {
    const getallproducts = await Products.find();
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
