var express = require('express');
var router = express.Router();
const db = require("../models");

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

    db.Favorite.insertMany({ media_name: givenMediaName })
    .then(function(data){
      console.log("New Favorite record inserted in Favorite.");
      }).catch(err => {
        res.status(400).json(err);
        });

});

// may require more auth for future reference
router.get('/:id', function (req, res) {
    const givenId = req.params.id;
    console.log('givenId', givenId);
    db.User.findById(givenId)
      .then(user => {
        console.log('Router user: ', user);
        const favorites = user.favorites;
        res.json(favorites);
      })
      .catch(err => {
        res.status(400).json(err);
      });

});

router.get('/', function (req, res) {

  db.Favorite.aggregate(
    [ 
        { "$group":  { "_id": "$media_name", "count": { "$sum": 1 } } },
        { $sort   : { count : -1 } },
        { $limit  : 5 }

    ],  function(err, results) {
              console.log("Aggregate favorite request: ", results);
              res.json(results);
        }
)
})

router.delete('/:id/:medianame', function (req, res) {
    const givenId = req.params.id;
    const mediaName = req.params.medianame;

    db.User.findOneAndUpdate({_id: givenId}, {
      $pull: { favorites: 
          { 
            media_name: mediaName 
          } 
        }
      }
      ).then(function(data){
          // to do: instead of returning entire user object, 
          // just return favorite that was successfully deleted
          res.json(data);
      }).catch(err => {
          res.status(400).json(err);
        });

});


module.exports = router;