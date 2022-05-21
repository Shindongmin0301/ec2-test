var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/greeting', (req, res) => {
  res.render('greeting');
});

module.exports = router;
