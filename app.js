var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port',3333);
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

app.listen(app.get('port'), function () {
    console.log('server connected to http:localhost:' + app.get('port'));
});
