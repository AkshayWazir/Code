const User = require("./middleware/content.js");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(4000, () => console.log("Server is running on port 4000"));

app.get("/url/n", User.fetchUsers);
