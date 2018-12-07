var express = require('express');
var router = express.Router();

const goodsData = require('./../mock/goods.json')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(goodsData);
});

module.exports = router;
