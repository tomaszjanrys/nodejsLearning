exports.postreg = ('/postregs', (req,res)=>{
    res.json({
        'name' : req.body.name,
        'email': req.body.email,
        'password': req.body.password
    })
console.log(req.body.name)
})