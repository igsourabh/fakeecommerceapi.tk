const express = require("express");
const Products = require("../model/productSchema");



const router = express.Router();

// get singel pruducts

router.get("/:category/:id", async (req, res) => {
  try {
    const cate = req.params.category;
    const exi = await Products.exists({ category: cate });

    if (!exi) {
      return res.json({ error: "sorry no category exist in our database" });
    }
    const id = req.params.id;
    // const getsingelproductsexist = await Products.exists({ id: id });

    const getsingelproducts = await Products.findById({ _id: id,category:cate });
  
    res.json(getsingelproducts);
  } catch (error) {
    console.log(error.message);
    return res.json({ error: "sorry no prducts found with this id" });
    
  }
});

module.exports = router;
