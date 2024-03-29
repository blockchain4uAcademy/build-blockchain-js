const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain');
const  { v4: uuid }  = require('uuid');

const port = process.argv[2]||3001;

const rp= require('request-promise')

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


// create a new transaction
app.post('/transaction', function(req, res) {
	const newTransaction = req.body;
	const blockIndex = bitcoin.createNewTransaction(newTransaction  )
//	const blockIndex = bitcoin.addTransactionToPendingTransactions(newTransaction);
	res.json({ note: `Transaction will be added in block ${blockIndex}.` });
});




// mine a block
app.get('/mine', function(req, res) {
	const lastBlock = bitcoin.getLastBlock();
	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {
		transactions: bitcoin.pendingTransactions,
		index: lastBlock['index'] + 1
	};
	const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
	const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
	bitcoin.createNewTransaction(12.5,"00",nodeAddress)
	const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
  res.json({
      note: "New block mined & broadcast successfully",
    block: newBlock
  });

});
// register a node and broadcast it the network 

// register a node and broadcast it the network
app.post('/register-and-broadcast-node', function(req, res) {
	const newNodeUrl = req.body.newNodeUrl;
	if (bitcoin.networkNodes.indexOf(newNodeUrl) == -1) bitcoin.networkNodes.push(newNodeUrl);

	const regNodesPromises = [];
	bitcoin.networkNodes.forEach(networkNodeUrl => {
		const requestOptions = {
			uri: networkNodeUrl + '/register-node',
			method: 'POST',
			body: { newNodeUrl: newNodeUrl },
			json: true
		};

		regNodesPromises.push(rp(requestOptions));
	});

	Promise.all(regNodesPromises)
	.then(data => {
		const bulkRegisterOptions = {
			uri: newNodeUrl + '/register-nodes-bulk',
			method: 'POST',
			body: { allNetworkNodes: [ ...bitcoin.networkNodes, bitcoin.currentNodeUrl ] },
			json: true
		};

		return rp(bulkRegisterOptions);
	})
	.then(data => {
		res.json({ note: 'New node registered with network successfully.' });
	});
});



// register a node with the network 
app.post('/register-node',function (req,res){
	const newNodeUrl = req.body.newNodeUrl; 
	const nodeNotAlreadyPresent =  bitcoin.networkNodes.indexOf(newNodeUrl) == -1
	const notCurrentNode = bitcoin.currentNodeUrl !== newNodeUrl
	if(nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(newNodeUrl)
	res.json({ note:'new node registered successfully'})
})

// register multiple nodes at once 
app.post('/register-nodes-bulk',function (req,res){
	const allNetworkNodes = req.body.allNetworkNodes; 
	allNetworkNodes.forEach(networkNodeUrl=> {
	const nodeNotAlreadyPresent =  bitcoin.networkNodes.indexOf(networkNodeUrl) == -1
	const notCurrentNode = bitcoin.currentNodeUrl !== networkNodeUrl
	if(nodeNotAlreadyPresent && notCurrentNode) bitcoin.networkNodes.push(networkNodeUrl)

})
res.json({ note:'Bulk registration successfully'})
})


app.listen(port, function() {
	console.log(`Listening on port ${port}...`);
});


