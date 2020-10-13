const express = require('express')
const router = express.Router();
///import controller
const pagescontroller = require('../controllers/pagescotrollers')

//middelware przed kazdym get zosatnie wykonane midd
function midd(req, res, next){
console.log('TO jest middelware dla router')
next()
}
router.use(midd)
///end - mid//
//przypisanie akcji home kontakt register do end pointu
router.get('/',pagescontroller.home)
router.get('/kontakt', pagescontroller.kontakt)
router.get('/register', pagescontroller.reg)
module.exports = router