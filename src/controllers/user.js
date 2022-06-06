const model = require("../model");
const db = require("../database");

const register = async function (req, res) {
  try {
    console.log(req.body);
    let { username, password } = req.body;
    let user = model.User.create(username, password);
    db.writeOnce("users", user);
    db.createIndexByField("users", "username");
    return res.status(200).json({ msg: "user added" });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      error: err.message,
    });
  }
};

const login = async function (req, res) {
  try {
    console.log(req.body);
    // let { username, password } = req.body;
    if (!req.body) {
      console.log("req.body is undefined");
      res.status(400);
    }

    let user = await db.findByUsername("users", req.body);
    if (user) {
      let token = { [user._id]: user.username };

      return res.json({
        token,
        user: user,
      });
    }

    return res.status(400).json({
      error: "Could not sign in",
    });
  } catch (error) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = { register, login };
