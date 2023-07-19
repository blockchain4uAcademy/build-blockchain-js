const Blockchain = require('./blockchain');

const bitcoin =new Blockchain();
//------------------01 Testing create block
/* bitcoin.createNewBlock(2113,'FKG65456GDDG','FQFJK56867'); */


//------------------02Testing create transaction 
/* bitcoin.createNewBlock(2113,'FKG65456GDDG','FQFJK56867');
bitcoin.createNewTransaction(200,'med5456GDDG','KHALILJK56867');
bitcoin.createNewBlock(156,'FKG65456GDDG','FQFJK56867');

bitcoin.createNewTransaction(200,'med5456G DDG','KHALILJK56867');
bitcoin.createNewTransaction(200,'med5456GDDG','KHALILJK56867');
bitcoin.createNewTransaction(200,'med5456GDDG','KHALILJK56867');


bitcoin.createNewBlock(156,'FKG65456GDDG','FQFJK56867'); */
//console.log(bitcoin);
//console.log(bitcoin.chain[1]);

//-----------------03Testing hash block method
/* const previousBlockHash="5654BFDD86DSF86";
const currentBlockData= [
  {
    amount:1,
    sender:"IOFOISD545454",
    recipient:"FOIDUOI545645",
  },
  {
    amount:120,
    sender:"IOkkFOISD545454",
    recipient:"OIDUOI545645",
  }
,  {
  amount:200,
  sender:"FOISD545454",
  recipient:"DUOI545645",
}

]
const nonce=120

const hash =bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce)
console.log(hash);
*/

//-----------------04Testing proof of work method
/* const previousBlockHash="5654BFDD86DSF86";
const currentBlockData= [
  {
    amount:1,
    sender:"IOFOISD545454",
    recipient:"FOIDUOI545645",
  },
  {
    amount:120,
    sender:"IOkkFOISD545454",
    recipient:"OIDUOI545645",
  }
,  {
  amount:200,
  sender:"FOISD545454",
  recipient:"DUOI545645",
}

]
const proofedNonce =bitcoin.proofOfWork(previousBlockHash,currentBlockData)
console.log(proofedNonce);

const hash =bitcoin.hashBlock(previousBlockHash,currentBlockData,proofedNonce)
console.log(hash); */

console.log(bitcoin);