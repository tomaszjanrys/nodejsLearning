const express = require('express')
const router = express.Router();
///import controller
const pagescontroller = require('../controllers/pagescotrollers');
const registercontroller = require('../controllers/registercontroller');
const kontaktcontroller = require('../controllers/kontaktcontroller');
const Postreg = require('../controllers/postreg')
//middelware przed kazdym get zosatnie wykonane midd
function midd(req, res, next){
console.log('TO jest middelware dla router')
next()
}
router.use(midd)
///end - mid//
//przypisanie akcji home kontakt register do end pointu
router.get('/',pagescontroller.home)
router.get('/kontakt', kontaktcontroller.kontakt)
router.get('/register', registercontroller.reg2)
router.post('/postregs', Postreg.postreg)
//router.post('/register', registercontroller.reg)
module.exports = router