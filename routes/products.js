var express = require('express');
var router = express.Router();
const controllerProducts = require('../controllers/controllerProducts');

router.get("/",controllerProducts.get);
router.get("/edit/:id",controllerProducts.getEdit);
router.post("/",controllerProducts.post);
router.put("/",controllerProducts.put);
router.delete("/",controllerProducts.remove);


module.exports = router;