var express = require('express');
var app = express();
var port = 3700;

var question1 = {text: "First Question"}
var question2 = {text: "Second Question"}
var questions = [question1, question2];

app.get('/api/v1/questions', function(req, res) {
	res.send(JSON.stringify(questions));
});

var server = app.listen(port, function() {
	console.log('Listening on port %d', server.address().port);
});
