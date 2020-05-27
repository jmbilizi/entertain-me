var express = require('express');
var router = express.Router();
const db = require("../models");

router.put('/', function (req, res) {
    const givenId = req.body.userId;
    const celebName = req.body.celebName;

    db.User.findOneAndUpdate({_id: givenId}, {
        $push: { celebrities: 
            { 
              celeb_name: celebName
            }
         }
        }
        ).then(function(data){
            res.json(data);
        }).catch(err => {
            res.status(400).json(err);
          });

    db.Celebrity.insertMany({ celeb_name: celebName })
    .then(function(data){
      console.log("New celebrity record inserted in Celebrity.");
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
        const celebrities = user.celebrities;
        res.json(celebrities);
      })
      .catch(err => {
        res.status(400).json(err);
      });

});

router.get('/', function (req, res) {

    db.Celebrity.aggregate(
      [ 
          { "$group":  { "_id": "$celeb_name", "count": { "$sum": 1 } } },
          { $sort   : { count : -1 } },
          { $limit  : 5 }

      ],  function(err, results) {
                console.log("Aggregate request: ", results);
                res.json(results);
          }
  )
})

router.delete('/:id/:celebname', function (req, res) {
    const givenId = req.params.id;
    const celebName = req.params.celebname;

    db.User.findOneAndUpdate({_id: givenId}, {
      $pull: { celebrities: 
          { 
            celeb_name: celebName 
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