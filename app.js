var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port',9000);
app.use(bodyParser.json());

app.get('/disease', function (req,res) {
    console.log("app");
    res.send({
        "disease_name" : "fiver",
        "symptoms" : ["a","b","c","d"],
        "risk_factor" : ["a","b","c","d"],
        "cause" : ["a","b","c","d"],
        "diagnosis" : ["a","b","c","d"],
        "treatment" : ["a","b","c","d"],
        "outlook" : ["a","b","c","d"],
        "prevention" : ["a","b","c","d"],
        "source" : ["a","b","c","d"],
        "about" : "about the disease"
    });
});

app.get('/molecule', function (req,res) {
    console.log("app");
    res.send({
        "moleculename" : "test molecule",
        "shortdescription" : "test shortdescription ",
        "pharmacokinetics" : {

            "absorption" : "test absorption",
            "distribution" : "test distribution",
            "metabolism" : "test metabolism",
            "excretion" : "test excretion"
        },
        "sideeffect" : ["a","b","c","d"],
        "specialprecaution" : ["a","b","c","d"],
        "otherdruginteraction" : ["a","b","c","d"],
        "otherinterection" : ["a","b","c","d"],
        "dosage" : "test dosage",
        "food" : ["a","b","c","d"],
        "listofcontradiction" : ["a","b","c","d"],
        "source": ["a","b","c","d"]
    });
});

app.get('/category', function (req,res) {
   console.log("cat");
   res.send({
       "categories" : ["analgesic", "anti1", "anti2","anti3" ,"anti4"]
   })
});
//cannabinoids
app.get('sub_category', function (req,res) {
   console.log("subcat");
   res.send()
});

app.get('/', function (req,res) {
    myObj = {
        "name":"John",
        "age":30,
        "cars": [
            { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
            { "name":"BMW", "models":[ "320", "X3", "X5" ] },
            { "name":"Fiat", "models":[ "500", "Panda" ] }
        ]
    };

    console.log(myObj.cars);
    res.send({
       "categories" : {"sc1" : "sc"}
    });
});

app.listen(app.get('port'), function () {
    console.log('server connected to http:localhost:' + app.get('port'));
});
