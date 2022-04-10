const express = require("express");
const Products = require("../model/productSchema");



const router = express.Router();

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


module.exports = router;
