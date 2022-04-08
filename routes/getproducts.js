const express = require("express");
const Products = require("../model/productSchema");

const dotenv = require("dotenv");
const fetchuser = require("../middleware/fetchuser");

const router = express.Router();
// get all products
router.get("/getallproducts", async (req, res) => {
  try {
    const getallproducts = await Products.find();
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});
// mobilephones category
router.get("/category/mobilephone", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "mobilephone" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// fashion catogary
router.get("/category/fashion", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "fashion" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// computers
router.get("/category/computers", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "computers" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// applinances
router.get("/category/appliances", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "appliances" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});
// electornics category
router.get("/category/electronics", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "electronics" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// books
router.get("/category/books", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "books" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// toys and games
router.get("/category/toys&games", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "toys&games" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
