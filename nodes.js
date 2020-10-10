const { json } = require('body-parser');
const express = require('express');
const port = 3333;
const bodyparser = require('body-parser');
const app = express();
const optionsParser = {
    limit : 100,
    strict : 'true'
}
const optionUrlencoded = {
    extended : false,
    inflate: true,
    parametrLimit : 500
}
app.use(bodyparser.urlencoded(optionUrlencoded));
app.use(bodyparser.json());

app.get('/',(req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.write('Welcome to my page')
    res.end(JSON.stringify(req.body,null,2));
    console.log(req.body)
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);

    } else {
        console.log('Serverrunnnnning ..... on ' + port)
    }
})