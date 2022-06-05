const model = require("../model");

const register = async function (req, res) {
  try {
    console.log(req.body);
    let { username, password } = req.body;
    model.user.username = username;
    model.user.password = password;
    return res.status(200).json({ msg: "user added" });
  } catch (err) {
    // console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
};

const login = async function (req, res) {
  try {
    console.log(req.body);
    let { username, password } = req.body;
    model.user.username = username;
    model.user.password = password;
    return res.status(200).json({ msg: "user logged in" });
  } catch (error) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = { register, login };
