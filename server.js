const { get } = require('./nodes')
const app = require('./nodes')




const server = app.listen(app.get('port'),(err)=>{
    if (err){
        console.log('cos poszlo nie tak')
    } else {
        console.log("Server runnnnig..... on " + server.address().port)
    }
})
app.set('port',process.env.PORT || 2323)