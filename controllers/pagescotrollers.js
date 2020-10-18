
//export akcji home do pliku index w route
exports.home = ('/',(req,res)=>{
    res.render('home', {
        formMessage: req.flash('form')
    })
})
