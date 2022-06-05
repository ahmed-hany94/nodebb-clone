const { MongoClient } = require("mongodb");

const db = {};

db.connect = function () {
  MongoClient.connect("mongodb://127.0.0.1:27017/nodebb-clone", (err, db) => {
    if (err) {
      console.log("db error", err);
      return;
    }

    console.log("db success");
    db.close();
  });
};

module.exports = db;
