const express = require('express');
const mainController = require('../controller/mainController.js');
const router =  express.Router();


router.get('/', mainController.index ) 
router.get('/detalle/:id',mainController.detalleMenu ) 


module.exports = router