var express = require('express');
var bodyParser = require('body-parser');
var data = [{item: 'id'}, {item: 'name'}, {item: 'password'}];


var app = express();

var urlencodedParser = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');
app.use('/assets', express.static('myAssets'));


app.get('/user',function(req,res){
  res.render('user', {uq: data});
});

app.post('/user', urlencodedParser, function(req,res){
  console.log(req.body);
  res.render('us', {data: req.body});

});



app.listen(3000);
