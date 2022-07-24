//app.js
const express = require('express');
const cors = require('cors');
const path = require('path');

var util = require('./utility');


var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

/**
 Create my-route
**/

app.get('/', function(req, res) {
    res.sendFile('public/index.html', { root: __dirname });
});

app.get('/form', function(req, res) {
    res.sendFile('public/form.html', { root: __dirname });
});

app.get('/welcome', (req, res) =>
  res.send({
    error: false,
    message: 'Welcome NodeJS, Express',
  }),
);

app.post('/', function(req, res) {
   
   var result ={ student_id: req.body.student_id,
     firstname: req.body.firstname,
     lastname: req.body.lastname,
     gender: req.body.gender
   }

  res.json(result);

});

app.get('/release', (req, res) =>{
   res.status(400).send("error aria?");
});

app.get('/ok', (req, res) =>{
   res.status(200).json({ "status": true, "result": ' successful!' });
});


app.get('/student/:student_id', function(req, res) {
    util.fakeStudentbyInfo(req.params.student_id, function (result) {
        res.json(result);
    });
});


var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});