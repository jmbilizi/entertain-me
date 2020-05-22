var express = require('express');
var router = express.Router();
const db = require("../models");
var User = require('../models/user');

router.put('/', function (req, res) {
    const givenId = req.body.userId;
    const givenMediaId = req.body.mediaId;
    const givenMediaName = req.body.mediaName;
    const givenMediaType = req.body.mediaType;

    db.User.findOneAndUpdate({_id: givenId}, {
        $push: { favorites: 
            { 
              media_name: givenMediaName, 
              media_id: givenMediaId, 
              media_type: givenMediaType
            }
         }
        }
        ).then(function(data){
            res.json(data);
        }).catch(err => {
            res.status(400).json(err);
          });

});
// may require more auth
router.get('/:id', function (req, res) {
    const givenId = req.params.id;
    console.log('givenId', givenId);
    db.User.findById(givenId)
      .then(user => {
        console.log('user', user);
        const favorites = user.favorites;
        res.json(favorites);
      })
      .catch(err => {
        res.status(400).json(err);
      });

});


module.exports = router;