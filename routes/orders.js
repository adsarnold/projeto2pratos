var express = require('express');
var router = express.Router();
const controllerOrders = require('../controllers/controllerOrders');

router.get("/",controllerOrders.get);
router.get("/edit/:id",controllerOrders.getEdit);
router.post("/",controllerOrders.post);
router.put("/",controllerOrders.put);
router.delete("/",controllerOrders.remove);


module.exports = router;