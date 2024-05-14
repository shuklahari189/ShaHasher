const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 5500;

app.use(express.static("./src"));

app.listen(port);
