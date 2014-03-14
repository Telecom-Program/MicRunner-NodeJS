var express = require('express');
var app = express();
var port = 3700;

var question1 = {text: "First Question 1"}
var question2 = {text: "Second Question"}
var questions = [question1, question2];

app.use(express.json());
/*
app.use(function (error, req, res, next) {
    if (error.message === "invalid json"){
        console.log(req)
    } else {
        next();
    }
});
*/

function get_question(req, res) {
    res.json(questions);
};

function add_question(req, res) {
    new_question = {text:req.body.text}
    questions.push(new_question)
    res.send(200);
}

app.get('/api/v1/question/:id', get_question)
app.get('/api/v1/question', get_question)
app.post('/api/v1/question', add_question)

var server = app.listen(port, function() {
    console.log('Listening on port %d', server.address().port);
});
