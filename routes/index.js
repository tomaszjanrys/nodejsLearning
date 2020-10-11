const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('home')
})
router.get('/kontakt', (req, res )=>{
    res.render('kontakt')
})
router.get('/register',(req,res)=>{
    res.render('reg')
})
module.exports = router