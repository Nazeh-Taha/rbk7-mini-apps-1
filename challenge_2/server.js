const express = require('express'); 
const app = express();
const fs = require('fs');
app.use(express.static('views'));
const router = express.Router();
//json2csv to convert from json to csv
const jsonTocsv = require("json2csv").parse;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
//use ejs file
app.set('view engine', 'ejs');
app.set("views", __dirname + "/views"); 
var port = process.env.port || 8080;

let csv = null;
app.post('/', function(req,res){
  const jsonData = JSON.parse(req.body.jsondata);
  csv = jsonTocsv(jsonData);
  //
  res.render("index", {file: csv})
  //console.log(csv);
  //write File csv
  fs.writeFile('csv.csv', csv, (err) => {
    if (err) throw err;
    console.log('csv saved!');
});
  
});
//open index file
app.get("/", (req, res) => { 
  res.render("index", {file: csv})
}); 


  
app.use('/', router);
app.listen(port);


