var express = require("express");
var router = express.Router();
const db = require("../models");

// may require more auth for future reference
router.get("/:id", function (req, res) {
  const givenId = req.params.id;
  console.log("givenId", givenId);
  db.User.findById(givenId)
    .then((user) => {
      console.log("Router user: ", user);

      res.json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// may require more auth for future reference
router.put("/:id", function (req, res) {
  const givenId = req.body._id;
  const givenFname = req.body.fname;
  const givenLname = req.body.lname;
  const givenEmail = req.body.username;

  console.log("givenId", givenId);
  console.log(req.body);
  db.User.findOneAndUpdate(
    { _id: givenId },
    {
      fname: givenFname,
      lname: givenLname,
      username: givenEmail,
    }
  )
    .then(function (data) {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
