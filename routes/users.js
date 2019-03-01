var express = require('express');
var getJSON = require('get-json');
var router = express.Router();

let subData = [];
let curSub = "all";

// function helloThere() {
//   var ret;
//   getJSON('https://www.reddit.com/r/'+ curSub +'/hot/.json',(err, data) => {
//     console.log(err);
//     //console.log(JSON.stringify(data));
//     ret = JSON.stringify(data);
//     var temp = data;
//     temp.data.children.map((item, i) => {
//       subData.push(item.data.permalink);
//     });
//   return(ret);
//     // subData = data;
//     // console.log('temp' + subData);
//   });
// }
function getSub(){
  return new Promise((resolve, reject) => {
    console.log('in get sub cursub is: ' + curSub);
    subData = [];
    getJSON('https://www.reddit.com/r/'+ curSub +'/hot/.json',(err, data) => {
      console.log(err);
      //console.log(JSON.stringify(data));
      ret = JSON.stringify(data);
      var temp = data;
      temp.data.children.map((item, i) => {
        subData.push(item.data.permalink);
      });
      resolve(ret);
    });
  });
}


router.get('/', function(req, res) {
  curSub = 'all';
  console.log('got request!');
  getSub().then(function(value){
    console.log('returned sub data ' + curSub);
    res.send(value);
  });

});

// router.get('/', function(req, res) {
//   //res.send('respond with a resource');
//   console.log('got request!');
//   getJSON('https://www.reddit.com/r/'+ curSub +'/hot/.json',(err, data) => {
//     console.log(err);
//     //console.log(JSON.stringify(data));
//     res.send(JSON.stringify(data));
//     var temp = data;
//     temp.data.children.map((item, i) => {
//       subData.push(item.data.permalink);
//     });
//     getSub.then(function(value){
//       console.log(value);
//     });
//     // subData = data;
//     // console.log('temp' + subData);
//   });
//
// });

router.get('/sub/:name', function(req, res){
  // console.log(req.params.name);
  curSub = req.params.name;
  console.log("the new cursub is " + curSub)
  getSub().then(function(value){
    console.log('returned sub data ' + curSub);
    res.send(value);
  });
  // res.send('hello');
});

router.get('/post/:value', function(req, res){


  var lnk = subData[req.params.value];


  getJSON('https://www.reddit.com' + lnk + '.json', function(err, data){
    res.send(JSON.stringify(data));
  });


});

module.exports = router;
