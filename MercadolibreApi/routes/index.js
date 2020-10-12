var express = require('express');
var indexControl = require('../control/indexControl');
var router = express.Router();

router.get('/api/items', async (req, res, next) => {
  res.send(await indexControl.getProducts(req.query));
});

router.get('/api/items/:id', async (req, res, next) => {
  res.send(await indexControl.getProductInfo(req.params.id));
});



module.exports = router;