var express = require('express');
var getJSON = require('get-json');
var router = express.Router();

let curSub = 'all';
let linkList = [];
let i = 0;

function getSub(){
  return new Promise((resolve, reject) => {
    this.linkList = [];
    this.i = 0;
    var link = 'https://www.reddit.com/r/' + curSub + '/.json';
    getJSON(link, (err, data) => {
      if (err) console.log(err);

      data.data.children.map((item, i) => {
        this.linkList.push(item.data.permalink);
      });

      getPost().then((value) => {resolve(value)});

    });
  });
}

function getPost(){
  return new Promise((resolve, reject) => {
    var link = 'https://www.reddit.com' + this.linkList[this.i] + '/.json';

    getJSON(link, (err, data) => {
      if (err) console.log(err);

      resolve(JSON.stringify(data));
    });
  });
}

router.get('/', function(req, res){
  console.log('got api index request.');
  getSub().then((value) => {
    res.send(value);
  });
  // res.send('hello there!');
});

router.get('/i/:index', function(req, res){
  this.i = req.params.index;

  getPost().then((value) => res.send(value));
});


module.exports = router;
