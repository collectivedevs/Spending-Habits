const { admin, db } = require("../util/admin");
const firebase = require("firebase");

const { firebaseConfig } = require("../util/config");
firebase.initializeApp(firebaseConfig);

const { validateSignupData, validateLoginData, reduceUserDetails } = require("../util/validators");

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

/** Logs user in. */

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  const { valid, errors } = validateLoginData(user);

  if (!valid) return res.status(400).json(errors);

  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({ token });
    })
    .catch(err => {
      console.error(err);
      // Can issue error messages based on the error code given
      //   err.code === "auth/wrong-password" OR err.code === "auth/user-not-found" OR
      //   err.code === "auth/invalid-email"
      return res
        .status(403)
        .json({ general: "Wrong credentials, please try again" });
    });
};

/** Add user details. */

exports.addUserDetails = (req, res) => {
  let userDetails = reduceUserDetails(req.body);

  db.doc(`/users/${req.user.username}`)
    .update(userDetails)
    .then(() => {
      return res.json({ message: "Details added successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

/** Get current user details. */

exports.getAuthenticatedUser = (req, res) => {
  let userData = {};
  db.doc(`/users/${req.user.username}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        userData.credentials = doc.data();

        return res.json(userData);
      }
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

/** Uploads image to user account. */

exports.uploadImage = (req, res) => {
  const BusBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");

  const busboy = new BusBoy({ headers: req.headers });

  let imageFileName;
  let imageToBeUploaded = {};

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
      return res.status(400).json({ error: "Wrong file type submitted" });
    }
    //my.image.png
    const imageExtension = filename.split(".")[filename.split(".").length - 1];
    imageFileName = `${Math.round(
      Math.random() * 10000000000
    )}.${imageExtension}`;

    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };

    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype
          }
        }
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/users/${req.user.username}`).update({ imageUrl });
      })
      .then(() => {
        return res.json({ message: "Image uploaded successfully" });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ error: err.code });
      });
  });
  busboy.end(req.rawBody);
};
