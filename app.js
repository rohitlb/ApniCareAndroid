var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mongoose = require('mongoose');


var mongoDBStore = require('connect-mongodb-session')(session);

var path = require('path');

var app = express();
//sub

app.set('port',9000);
app.use(bodyParser.json());

var Needhelp = require('./model/needhelp');

// it is used to recieve data from frontend or app
app.use(bodyParser.urlencoded({extended : false}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var store = new mongoDBStore({
    uri : 'mongodb://localhost/ApniCare',
    collection : 'mySessions'
});


store.on('error',function (error) {
    assert.ifError(error);
    assert.ok(false);
});

app.use(session({
    secret : 'keyboard cat',
    cookie : {maxAge : 1000* 60 * 60 * 24 * 7},
    store : store,
    resave : false,
    saveUninitialized : true
}));

app.post('/needhelp' , function (req,res) {
    var number = req.body.number;
    var subject = req.body.subject;
    var contact_message = req.body.contact_message;

    var needhelp = new Needhelp({
        subject : subject,
        contact_message : contact_message
    });

    needhelp.save(function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send("We will contact you soon")
        }
    });
});

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

app.get('/teststring', function (req,res) {
    res.render('information');
});

app.post('/teststring', function (req,res) {
    var names = req.body.molecules;

    //var names = 'test a ; test b ; test c ; tes d ; rohit ; rupesh ; ritu ';

    console.log(names);

    var re = /\s*;\s*/;
    var nameList = names.split(re);

    console.log(nameList);


    res.end();
});

app.post('/information', function (req,res) {
    var a = req.query.molecule;
    //console.log(typeof a);
    test = [
        {
            "_id": "5a59a0ccf6ebb40550f29e16",
            "molecule_name": "q",
            "drug_categories": "q",
            "absorption": "q",
            "distribution": "q",
            "metabolism": "qq",
            "excretion": "q",
            "food": "q",
            "__v": 0,
            "source": [ "Rohit" , "Rajat" , "Pranjal"

            ],
            "contraindications": [ {subhead : "Rohit"  , info : "Rajat"},
                {subhead : "Mohit"  , info : "Raj"}

            ],
            "dosage": [
                {subhead : "Rohit"  , info : "Rajat"},
                {subhead : "Mohit"  , info : "Raj"}

            ],
            "other_interaction": [
                {subhead : "Rohit"  , info : "Rajat"},
                {subhead : "Mohit"  , info : "Raj"}
            ],
            "other_drug_interaction": [
                {subhead : "Rohit"  , info : "Rajat"},
                {subhead : "Mohit"  , info : "Raj"}
            ],
            "precaution": [
                "q","Rohit" , "Rajat" , "Pranjal"
            ],
            "side_effect": [
                "q","Rohit" , "Rajat" , "Pranjal"
            ],
            "description": "q"
        }
    ];

    //objects = JSON.parse(test);
    console.log(typeof test);

    res.send(test)
});

//*************************************Feedback and needhelp*******************************************************************

// fields 1 usefulness  (here user will mention the usefulness of the  site (bad ,good , very good , best etc) )
// 2 suggestion (text written by user .... the main feedback)
// response keys ==>> status, message

app.post('/feedback' , function (req,res) {
    var usefulness = req.body.usefulness;
    var suggestion = req.body.suggestion;

    var feedback = new Feedback({
        usefulness : usefulness,
        suggestion : suggestion
    });

    feedback.save(function (err, result) {
        if (err) {
            console.log(err);
            res.send({status: "failure", message: "some error"});
        } else {
            res.send({status: "success", message: "thnx for feedback"});
        }
    });
});

// field 1 = subject => subject of the help
// filed 2 = contact_message => text, help the user needs
// response keys ==>> status, message

app.post('/needhelp' , function (req,res) {
    var subject = req.body.subject;
    var contact_message = req.body.contact_message;

    var needhelp = new Needhelp({
        //here user ID should be added
        subject : subject,
        contact_message : contact_message
    });

    needhelp.save(function (err, result) {
        if (err) {
            console.log(err);
            res.send({status: "failure", message: "some error"});
        } else {
            res.send({status: "success", message: "We will Contact you soon"});
        }
    });
});


//data base connection and opening port
var db = 'mongodb://localhost/ApniCare';
mongoose.connect(db, {useMongoClient: true});


//=============================Start server========================
//connecting database and starting server
var database = mongoose.connection;
database.on('open', function () {
    console.log("database is connected");
    app.listen(app.get('port'), function () {
        console.log('server connected to http:localhost:' + app.get('port'));
    });
});
