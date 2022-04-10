const express = require("express");
const Products = require("../model/productSchema");

const dotenv = require("dotenv");
const fetchuser = require("../middleware/fetchuser");
dotenv.config({ path: "./config.env" });

const JWT_SECRET = process.env.JWT_SECRET;
const router = express.Router();

router.post("/createproducts", fetchuser, async (req, res) => {
  const { title, description, image, price, category } = req.body;
  const createproducts = await new Products({
    title: title,
    description: description,
    image: image,
    price: price,
    category: category,
  });
  createproducts.save();
  res.json(createproducts);
});
module.exports = router;
