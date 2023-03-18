var express = require('express');
var router = express.Router();
var cors = require('cors');

var helloList = [];


/* GET hello listing. */
router.get('/',function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(helloList));
});

/* POST hello listing. */
router.post('/', function(req, res, next) {
  helloList.push(req.body.name);
  res.sendStatus(200);
});



module.exports = router;
