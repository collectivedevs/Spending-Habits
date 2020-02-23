const { admin, db } = require("../util/admin");
const firebase = require("firebase");

const { firebaseConfig } = require("../util/config");
firebase.initializeApp(firebaseConfig);

const { validateSignupData } = require("../util/validators");

/** Signs up a user. */

exports.signup = (req, res) => {

  // The data the sign up page takes 
  const newUser = {
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    
  };

  const { valid, errors } = validateSignupData(newUser);

  if (!valid) return res.status(400).json(errors);

  const noImg = "no-img.png";

  // Validate Data
  let token, userId;

  db.doc(`/users/${newUser.username}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({ username: "this username is already taken" });
      } else {
        // This creates the user account
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then(data => {
      // This pulls on the user account data
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(idToken => {
      // This takes the data passed from the previous .then statement and stores it in token
      token = idToken;

      const userCredentials = {
        username: newUser.username,
        firstName:  newUser.firstName,
        lastName: newUser.lastName,
        budget: 0.00,
        quote: "Self Motivate Your Own Change",
        email: newUser.email,
        createdAt: new Date().toISOString(),
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImg}?alt=media`,
        userId
      };
      return db.doc(`/users/${newUser.username}`).set(userCredentials);
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch(err => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email is already in use" });
      } else {
        return res
          .status(500)
          .json({ general: "something went wrong please try again." });
      }
    });
};

