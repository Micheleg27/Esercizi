const Crypto = require('crypto');

function randomId(){

    return Crypto.randomUUID();
}

console.log(randomId());
