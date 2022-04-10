const express = require("express");
const connectDB = require("./db");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors);
connectDB();

dotenv.config({ path: "./config.env" });

app.use(express.json());

app.use("/api/auth", require("./routes/signup.js"));
app.use("/api/auth", require("./routes/createproducts.js"));

app.use("/category", require("./routes/getproductsbycategory.js"));
app.use("/category", require("./routes/getsingelproducts.js"));

app.use("/getallproducts", require("./routes/getallproducts"));
// app.use("/ok", (req, res) => {
//   res.json("ok");
// });

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.listen(PORT, () => {
  console.log("app running on", PORT);
});
