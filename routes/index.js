var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router get /year to add
router.get('/year', function(req,res) {
  let year = new Date().getFullYear().toString();
res.json({result: true, year: year})
});



module.exports = router;
