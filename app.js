const express = require("express");
const cors = require("cors");
const path = require("path");

const db = require("./src/database");

const app = express();

db.connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const CURRENT_WORKING_DIR = process.cwd();

app.use("/", require("./src/routes"));
app.use(express.static(path.join(CURRENT_WORKING_DIR, "public")));

app.listen("6969", () => {
  console.log(`Listening on http://localhost:6969`);
});
