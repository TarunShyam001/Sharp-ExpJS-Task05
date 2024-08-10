const path = require('path');

const express = require('express');

const productControllers = require('../controller/products')

const router = express.Router();

router.get('/', productControllers.getShopDetails);

module.exports = router;
