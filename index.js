var express = require('express');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get("/",function(req,res){
    res.send('The Starting Page')
})
// const saltRounds = 10;
// const myPlaintextPassword = '6';
// (async () => {
//     const salt = await bcrypt.genSalt(saltRounds);
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         console.log(hash)
//     });
// })();
app.listen(3000,()=>{
    console.log('Listening to port 3000')
})