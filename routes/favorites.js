var express = require('express');
var router = express.Router();
const db = require("../models");
var User = require('../models/user');

router.put('/', function (req, res) {
    const givenId = req.body.userId;
    const givenMediaId = req.body.mediaId;
    // find user and update

    console.log(req.body);

    /* db.User.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    }); */

    db.User.findOneAndUpdate({_id: givenId}, {
        $push: { favorites: 
            { 
              media_name: mediaName, 
              media_id: givenMediaId, 
              media_type: "tv" 
            }
         }
        }
        ).then(function(data){
            res.json(data);
        }).catch(err => {
            console.log(err);
            console.log("I'm here in the catch.");
            res.status(400).json(err);
          });

});

module.exports = router;