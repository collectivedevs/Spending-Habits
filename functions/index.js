const functions = require("firebase-functions");

const app = require("express")();

const cors = require("cors");
app.use(cors());

const { signup, login } = require("./handlers/users");

// User Routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.https.onRequest(app);

