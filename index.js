var express = require('express');
var bcrypt = require('bcrypt');
var app = express();
var path = require('path')
var registeruser = require('./model')
var config = require('./config')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get("/",function(req,res){
    res.render("form");
})
app.post("/addUser",function(req,res){
  var userdata = req.body;
  var adduser =new registeruser({
      username: userdata.username,
      password : userdata.password
  });
  adduser.save().then(function(){
      res.send("Data Saved Successfully")
  }).
  catch(function(err){
      res.status(401).json(err.message)
  })
})

app.listen(3000,()=>{
    console.log('Listening to port 3000')
})