const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res) {
    // res.send('Hello there! \n General Kenobi!')
    // res.sendFile('index.html')
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    // console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;

    res.send('The result of the calculation is: ' + result);
});

app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmicalculator', function(req, res) {
    console.log(req.body);
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = weight/ Math.pow(height, 2);
    // console.log(result);
    

    res.send('Your calculated BMI is: ' + result);
})

app.listen(3000, function() {
    console.log('Server started on port 3000');
});