exports.postreg = ('/postregs', (req,res)=>{
    req.flash('form', req.body.name.split(' ')[0] + ', Witaj , Teraz kestes zalogowany')
    //console.log(req.body.name.split(' ')[0])
   res.redirect('/')
   // res.json({
   //     'name' : req.body.name,
   //     'email': req.body.email,
   //     'password': req.body.password
   // })

})