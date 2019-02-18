var express = require('express');
var getJSON = require('get-json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  console.log('got request!');

  getJSON('https://www.reddit.com/r/all/hot/.json', function(err, data) {
    console.log(err);
    //console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));
  });
});

module.exports = router;
