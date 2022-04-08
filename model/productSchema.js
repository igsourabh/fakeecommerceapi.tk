const mongoose = require("mongoose");
const productsSchema = mongoose.Schema(
  {
    title: { type: String, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
    price: { type: String, require: true },
    category: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("products", productsSchema);
