const connectToDB = require("./db");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
var cors = require("cors");
connectToDB();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/signup.js"));
app.use("/api/auth", require("./routes/createproducts.js"));
app.use("/", require("./routes/getproducts"));
app.use("/", require("./routes/getsingelproducts"));
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
