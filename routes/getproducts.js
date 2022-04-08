const express = require("express");
const Products = require("../model/productSchema");

const dotenv = require("dotenv");
const fetchuser = require("../middleware/fetchuser");

const router = express.Router();
// get all products
router.get("/getallproducts", async (req, res) => {
  const getallproducts = await Products.find();
  res.json(getallproducts);
});
// mobilephones category
router.get("/category/mobilephone", async (req, res) => {
  const getallproducts = await Products.find({ category: "mobilephone" });
  res.json(getallproducts);
});

// fashion catogary
router.get("/category/fashion", async (req, res) => {
  const getallproducts = await Products.find({ category: "fashion" });
  res.json(getallproducts);
});

// electornics category
router.get("/category/electronics", async (req, res) => {
  const getallproducts = await Products.find({ category: "electronics" });
  res.json(getallproducts);
});
// computers
router.get("/category/computers", async (req, res) => {
  const getallproducts = await Products.find({ category: "computers" });
  res.json(getallproducts);
});

// applinances
router.get("/category/appliances ", async (req, res) => {
  const getallproducts = await Products.find({ category: "appliances " });
  res.json(getallproducts);
});

// books
router.get("/category/books", async (req, res) => {
  const getallproducts = await Products.find({ category: "books" });
  res.json(getallproducts);
});

// toys and games
router.get("/category/toys&games", async (req, res) => {
  const getallproducts = await Products.find({ category: "toys&games" });
  res.json(getallproducts);
});

module.exports = router;
