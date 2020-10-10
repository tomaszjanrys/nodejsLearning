const { json } = require('body-parser');
const express = require('express');
const port = 3333;
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json())


app.get('/',(req, res)=>{
    res.json(200,{
        id : "111"
    })
    res.end();
    console.log(req.body)
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);

    } else {
        console.log('Serverrunnnnning ..... on ' + port)
    }
})