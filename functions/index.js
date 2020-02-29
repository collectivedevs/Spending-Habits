const functions = require("firebase-functions");

const app = require("express")();

const cors = require("cors");
app.use(cors());

const {
  getAllTransactions,
  createTransaction,
  getTransaction,
  deleteTransaction
} = require("./handlers/transactions");

const {
  signup,
  login,
  addUserDetails,
  uploadImage
} = require("./handlers/users");

const FBAuth = require("./util/fbAuth");

// Transaction Routes
app.get("/transactions", FBAuth, getAllTransactions);
app.post("/transactions", FBAuth, createTransaction);
app.get("/transactions/:transactionId", FBAuth, getTransaction);
app.delete("/transactions/:transactionId", FBAuth, deleteTransaction);

// User Routes
app.post("/signup", signup);
app.post("/login", login);
app.post("/user", FBAuth, addUserDetails);
app.post("/user/image", FBAuth, uploadImage);

exports.api = functions.https.onRequest(app);
