const express = require("express");
const Products = require("../model/productSchema");

const fetchuser = require("../middleware/fetchuser");

const router = express.Router();
// get all products

// mobilephones category
router.get("/:category", async (req, res) => {
  try {
    let { page, size } = req.query;
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 8;
    }
    if (page == 0) {
      page = 1;
    }
    const limit = parseInt(size);
    const skip = (page - 1) * size;
    const cate = req.params.category;
    if (!cate) {
      return res.json({ erro: "please provide vaild product category" });
    }
    const total = await Products.find({ category: cate }).countDocuments();

    const exi = await Products.exists({ category: cate });

    if (!exi) {
      return res.json({ error: "sorry no category exist in our database" });
    }
    const getallproducts = await Products.find({ category: cate })
      .limit(limit)
      .skip(skip);

    if (getallproducts.length < 1) {
      return res.json({ error: "sorry no more products available" });
    }

    res.json({ page, size, total, getallproducts });
    console.log(cate);
  } catch (error) {
    console.log(error);
  }
});

// // fashion catogary
// router.get("/fashion", async (req, res) => {
//   try {
//     const getallproducts = await Products.find({ category: "fashion" });
//     res.json(getallproducts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // computers
// router.get("/computers", async (req, res) => {
//   try {
//     const getallproducts = await Products.find({ category: "computers" });
//     res.json(getallproducts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // applinances
// router.get("/appliances", async (req, res) => {
//   try {
//     const getallproducts = await Products.find({ category: "appliances" });
//     res.json(getallproducts);
//   } catch (error) {
//     console.log(error);
//   }
// });
// // electornics category
// router.get("/electronics", async (req, res) => {
//   try {
//     const getallproducts = await Products.find({ category: "electronics" });
//     res.json(getallproducts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // books
// router.get("/books", async (req, res) => {
//   try {
//     const getallproducts = await Products.find({ category: "books" });
//     res.json(getallproducts);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // toys and games
// router.get("/toys&games", async (req, res) => {
//   try {
//     const getallproducts = await Products.find({ category: "toys&games" });
//     res.json(getallproducts);
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = router;
