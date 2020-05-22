const { db } = require("../util/admin");

/** Get all Transactions for user. */

exports.getAllTransactions = (req, res) => {
  db.collection("transactions")
    .orderBy("createdAt", "desc")
    .where("username" , "==", req.user.username)
    .get()
    .then(data => {
      let transactions = [];
      data.forEach(doc => {
        transactions.push({
         //...doc.data() <- this is an alternative method of getting the same data once all have same name that is
          transactionId: doc.id,
          expenseType: doc.data().type,
          cost: doc.data().cost,
          createdAt: doc.data().createdAt
        });
      });
      return res.json(transactions);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

/** Create a Tranasaction. */

exports.createTransaction = (req, res) => {
  if (req.body.expenseType.trim() === "") {
    return res.status(400).json({ body: "Transaction type must not be empty" });
  }

  const newTransaction = {
    expenseType: req.body.expenseType,
    cost: req.body.cost,
    createdAt: new Date().toISOString(),
    username: req.user.username
  };

  db.collection("transactions")
    .add(newTransaction)
    .then(doc => {
      const resTransaction = newTransaction;
      resTransaction.transactionId = doc.id;
      res.json(resTransaction);
    })
    .catch(err => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
};

/** Get a specific Transaction. */

exports.getTransaction = (req, res) => {
  let transactionData = {};

  db.doc(`/transactions/${req.params.transactionId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "transaction not found" });
      }
      transactionData = doc.data();
      transactionData.transactionId = doc.id;
      return res.json(transactionData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

/** Deletes a Transaction. */

exports.deleteTransaction = (req, res) => {
    const document = db.doc(`/transactions/${req.params.transactionId}`);
    document
      .get()
      .then(doc => {
        if (!doc.exists) {
          return res.status(404).json({ error: "transaction not found" });
        }
  
        if (doc.data().username !== req.user.username) {
          return res.status(403).json({ error: "Unauthorized" });
        } else {
          return document.delete();
        }
      })
      .then(() => {
        res.json({ message: "transaction deleted successfully" });
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: err.code });
      });
  };