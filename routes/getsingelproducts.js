const express = require("express");
const Products = require("../model/productSchema");

const dotenv = require("dotenv");
const fetchuser = require("../middleware/fetchuser");

const router = express.Router();


// get singel pruducts 
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const getsingelproducts = await Products.findById({ _id: id });

    res.json(getsingelproducts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
