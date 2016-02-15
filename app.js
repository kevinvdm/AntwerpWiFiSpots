var express = require('express');
var bodyparser = require('body-parser');
var request = require('request');

var app = express();
var router = express.Router();
var port = 5000;

app.use(express.static('../Project Web Frameworks'));
app.use(bodyparser.json());

var url = "http://datasets.antwerpen.be/v4/gis/wifiopenbaar.json"

request({
    url: url,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
        app.use(bodyparser.json());
        console.log(body);
        app.get("/wifispots",function(req,res){
            res.json(body);
        });
    }
})

app.listen(port, function(err){
    console.log('Running server on port ' + port + '. Happy coding!');
});