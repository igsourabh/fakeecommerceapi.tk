const express = require("express");
const Products = require("../model/productSchema");


const fetchuser = require("../middleware/fetchuser");

const router = express.Router();
// get all products

// mobilephones category
router.get("/mobilephone", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "mobilephone" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// fashion catogary
router.get("/fashion", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "fashion" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// computers
router.get("/computers", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "computers" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// applinances
router.get("/appliances", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "appliances" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});
// electornics category
router.get("/electronics", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "electronics" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// books
router.get("/books", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "books" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

// toys and games
router.get("/toys&games", async (req, res) => {
  try {
    const getallproducts = await Products.find({ category: "toys&games" });
    res.json(getallproducts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
