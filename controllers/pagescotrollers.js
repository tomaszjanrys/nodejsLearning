
//export akcji home
exports.home = ('/',(req,res)=>{
    res.render('home')
})
exports.kontakt = ('/kontakt', (req, res )=>{
    res.render('kontakt')
})
exports.reg = ('/register',(req,res)=>{
    res.render('reg')
})