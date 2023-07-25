const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const  { v4: uuid }  = require('uuid');

const port =3000|| process.argv[2];

const nodeAddress = uuid().split('-').join('');

const bitcoin = new Blockchain();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.send(nodeAddress);
});
// get entire blockchain
app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
});



app.listen(port, function() {
	console.log(`Listening on port ${port}...`);
});


