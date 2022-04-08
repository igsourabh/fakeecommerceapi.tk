const express = require("express");
const User = require("../model/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const secret = process.env.JWT_SECRET;
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  // if (regex.test(email)) {
  //   return res.json("not a valid email");
  // }
  const finduser = await User.findOne({ email: email });
  if (finduser) {
    return res.json({ error: "user already exist" });
  }
  if (password.length < 5) {
    return res.json("password sould contain atlease 5 character");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await User.create({
    name: name,
    email: email,
    password: hash,
  });

  const data = {
    user: { id: user.id },
  };
  const authtoken = jwt.sign(data, secret);

  res.json({ authtoken: authtoken });
});

// login user
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.json({ error: "user not exist" });
  }
  const matchedpassword = await bcrypt.compare(password, user.password);
  if (!matchedpassword) {
    return res.json("incorrect password");
  }
  const data = {
    user: { id: user.id },
  };
  const authtoken = jwt.sign(data, secret);
  res.json({ status: 201, authtoken: authtoken });
});

module.exports = router;
