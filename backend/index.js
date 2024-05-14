const express = require("express");
const crypto = require("crypto");
const cors = require("cors");
const app = express();

app.use(cors());

function hashStr(str) {
    return crypto.createHash("sha1").update(str).digest("hex");
}

port = process.env.PORT || 3000;

app.get("/", function (req, res) {
    res.send("welcome !");
});

app.get("/hashStr", function (req, res) {
    const length = req.headers.length;
    const pass = req.headers.pass;
    const hashedPass = hashStr(pass).slice(0, length);
    res.status(200).send(hashedPass);
});

app.listen(port);
