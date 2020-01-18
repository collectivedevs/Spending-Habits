const functions = require("firebase-functions");

const app = require("express")();

const cors = require("cors");
app.use(cors());

const { signup } = require("./handlers/users");

// User Routes
app.post("/signup", signup);

exports.api = functions.https.onRequest(app);

