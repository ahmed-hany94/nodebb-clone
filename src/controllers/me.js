const me = async function (req, res) {
  try {
    return res.status(200).json({ message: "meeeeeee" });
  } catch (err) {
    res.status(400).json({
      error: "me: error",
    });
  }
};

module.exports = { me };
