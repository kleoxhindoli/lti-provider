var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('GET: ');
  console.log(req.body);
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  console.log('POST: ');
  console.log(req.body);
  res.render('index', { title: 'Express' });
});

module.exports = router;
