const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const fetchuser = (req, res, next) => {
  try {
    const token = req.header("authtoken");
    if (!token) {
      return res.json({ error: "please authenticate the user" });
    }
    const data = jwt.verify(token, secret);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error)
    res.json({ error: "user not authenticate" });
  }
};

module.exports = fetchuser;
