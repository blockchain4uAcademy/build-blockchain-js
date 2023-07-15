const Blockchain = require('./blockchain');

const bitcoin =new Blockchain();

bitcoin.createNewBlock(2113,'FKG65456GDDG','FQFJK56867');
bitcoin.createNewBlock(111,'FKG65456GDDG','FQFJK56867');
bitcoin.createNewBlock(21,'FKG65456GDDG','FQFJK56867');

console.log(bitcoin);