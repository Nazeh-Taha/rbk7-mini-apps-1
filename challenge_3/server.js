const express =require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser')
const port = 8080;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const db = require("./data/db.js")
///////////////GET///////////////////
app.get('/', function(req,res){
    res.sendFile('index.html');
    
});

//////////////POST////////////////////
app.post('/saveData', function(req,res){
    
 db.savenazeh(req.body.username,req.body.email,req.body.password);
})

app.listen(port, () => console.log('Server running on port 8080'))

