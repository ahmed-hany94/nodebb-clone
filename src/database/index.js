const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "nodebb-clone";

const db = {};

let _db = {};

db.connect = async function () {
  await client.connect();

  console.log("db success");

  _db = client.db(dbName);
};

db.createIndexByField = async function (collectionName, field) {
  try {
    const collection = _db.collection(collectionName);
    const indexName = await collection.createIndex({ [field]: 1 });
    console.log(indexName);
  } catch (err) {
    console.log(err);
  }
};

db.findByUsername = async function (collectionName, data) {
  let { username, password } = data;
  const collection = _db.collection(collectionName);
  let user = await collection.findOne({ username: username });

  if (user) {
    return {
      _id: user._id,
      username: user.username,
    };
  } else return null;

  // TODO: authenticate
};

db.writeOnce = async function (collectionName, data) {
  try {
    const collection = _db.collection(collectionName);
    const insertResult = await collection.insertOne(data);
    console.log("Inserted documents =>", insertResult);
  } catch (err) {
    console.log(err);
  }
};

db.writeMany = async function (collectionName, data) {
  try {
    const collection = _db.collection(collectionName);
    const insertResult = await collection.insertMany(data);
    console.log("Inserted documents =>", insertResult);
  } catch (err) {
    console.log(err);
  }
};

module.exports = db;
