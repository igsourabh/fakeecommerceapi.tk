const express = require("express");
const Products = require("../model/productSchema");

const fetchuser = require("../middleware/fetchuser");

const router = express.Router();
// get all products
router.get("/", async (req, res) => {
  try {
    let { page, size } = req.query;

    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 10;
    }
    const limit = parseInt(size);

    const skip = (page - 1) * size;

    const total = await Products.find().countDocuments();
    const getallproducts = await Products.find().limit(limit).skip(skip);
    if (getallproducts.length < 1) {
      return res.json({ error: "sorry no more products available" });
    }
    res.json({ page, size, total, getallproducts });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
