var express = require('express');
var getJSON = require('get-json');
var router = express.Router();

let subData = [];

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
    var temp = data;
    temp.data.children.map((item, i) => {
      subData.push(item.data.permalink);
    });
    // subData = data;
    // console.log('temp' + subData);
  });

});

router.get('/post/:value', function(req, res){


  var lnk = subData[req.params.value];


  getJSON('https://www.reddit.com' + lnk + '.json', function(err, data){
    res.send(JSON.stringify(data));
  });


});

module.exports = router;
