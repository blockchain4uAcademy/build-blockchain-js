const Blockchain = require('./blockchain');

const bitcoin =new Blockchain();
// testing create block
/* bitcoin.createNewBlock(2113,'FKG65456GDDG','FQFJK56867'); */


// testing create transaction 
bitcoin.createNewBlock(2113,'FKG65456GDDG','FQFJK56867');
bitcoin.createNewTransaction(200,'med5456GDDG','KHALILJK56867');
bitcoin.createNewBlock(156,'FKG65456GDDG','FQFJK56867');

bitcoin.createNewTransaction(200,'med5456GDDG','KHALILJK56867');
bitcoin.createNewTransaction(200,'med5456GDDG','KHALILJK56867');
bitcoin.createNewTransaction(200,'med5456GDDG','KHALILJK56867');


bitcoin.createNewBlock(156,'FKG65456GDDG','FQFJK56867');


console.log(bitcoin);

console.log(bitcoin.chain[1]);