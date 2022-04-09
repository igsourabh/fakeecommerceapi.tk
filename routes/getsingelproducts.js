const express = require("express");
const Products = require("../model/productSchema");

const dotenv = require("dotenv");
const fetchuser = require("../middleware/fetchuser");

const router = express.Router();


// get singel pruducts 

router.get("/mobilephone/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const getsingelproducts = await Products.findById({ _id: id });
  
      res.json(getsingelproducts);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/fashion/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const getsingelproducts = await Products.findById({ _id: id });
  
      res.json(getsingelproducts);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/computers/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const getsingelproducts = await Products.findById({ _id: id });
  
      res.json(getsingelproducts);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/appliances/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const getsingelproducts = await Products.findById({ _id: id });
  
      res.json(getsingelproducts);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/electronics/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const getsingelproducts = await Products.findById({ _id: id });
  
      res.json(getsingelproducts);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/books/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const getsingelproducts = await Products.findById({ _id: id });
  
      res.json(getsingelproducts);
    } catch (error) {
      console.log(error);
    }
  });
  router.get("/toys&games/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const getsingelproducts = await Products.findById({ _id: id });
  
      res.json(getsingelproducts);
    } catch (error) {
      console.log(error);
    }
  });

module.exports = router;
