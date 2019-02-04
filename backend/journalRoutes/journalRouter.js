require("dotenv").config();
const express = require("express");
const db = require("../data/dbHelpers");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth.protected, (req, res, next) => {
  db.findWorkouts()
    .then(journals => {
      console.log("journal", journals);
      res.status(200).send(journals);
    })
    .catch(err => next(err));
});
module.exports = router;