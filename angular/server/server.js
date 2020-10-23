const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello from the server');
})

app.listen(PORT, function(){
    console.log("Server listening on localhost:" + PORT);
})
//Add an endpoint to which the app must post the data to...
app.post('/enroll', function(req, res)  {
    console.log(req.body);
    res.status(401).send({"message": "Data recieved"});
})