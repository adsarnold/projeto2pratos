var express = require('express');
var router = express.Router();
const controllerClients = require('../controllers/controllerClients');

router.get("/",controllerClients.get);
router.get("/edit/:id",controllerClients.getEdit);
router.post("/",controllerClients.post);
router.put("/",controllerClients.put);
router.delete("/",controllerClients.remove);


module.exports = router;