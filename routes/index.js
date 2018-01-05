var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  let str = '';
  str += JSON.stringify(req.body);
  str += '\n================================================================\n'
  str += '\n================================================================\n'
  fs.writeFileSync(Date.now() + '.txt', str);
  res.render('index', { title: 'Express' });
});

module.exports = router;
