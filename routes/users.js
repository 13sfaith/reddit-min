var express = require('express');
var getJSON = require('get-json');
var router = express.Router();

var subData;

// router.get('/', function(req, res) {
//   //res.send('respond with a resource');
//
//   console.log('got request!');
//   var temp;
//   temp = getJSON('https://www.reddit.com/r/all/hot/.json', function(err, data) {
//     console.log(err);
//     //console.log(JSON.stringify(data));
//     res.send(JSON.stringify(data));
//     return(data);
//   });
//
//   console.log('temp');
// });

router.get('/', function(req, res) {
  //res.send('respond with a resource');

  console.log('got request!');
  getJSON('https://www.reddit.com/r/all/hot/.json',(err, data) => {
    console.log(err);
    //console.log(JSON.stringify(data));
    res.send(JSON.stringify(data));
    subData = data;
    console.log('temp' + subData);
  });

});

router.get('/post/:value', function(req, res){
  console.log(req.params.value);

  var lnk = subData.data.children[req.params.value].data.permalink;
  console.log(lnk);
  console.log('https://reddit.com' + lnk + '.json');
  console.log('before second promise');

  getJSON('https://www.reddit.com' + lnk + '.json', function(err, data){
    console.log(data);
  });

  res.send('hello');
});

module.exports = router;
