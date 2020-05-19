var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.put('/', function (req, res) {
    console.log(req.body.userId);
    // find user and update
    res.json({});
});

module.exports = router;