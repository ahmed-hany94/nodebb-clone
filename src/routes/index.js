const router = require("express").Router();
const path = require("path");

router.route("/").get(function (_, res) {
  res.sendFile(path.join(__dirname, "../../public", "index.html"));
});

router.route("/register").get(function (_, res) {
  res.sendFile(path.join(__dirname, "../../public/views/", "register.html"));
});

router.route("/login").get(function (_, res) {
  res.sendFile(path.join(__dirname, "../../public/views/", "login.html"));
});

router.route("/categories").get(function (_, res) {
  res.sendFile(path.join(__dirname, "../../public/", "index.html"));
});

router.route("/api/me").get(require("../controllers/").me.me);
router.route("/api/register").post(require("../controllers/").user.register);
router.route("/api/login").post(require("../controllers/").user.login);

module.exports = router;
