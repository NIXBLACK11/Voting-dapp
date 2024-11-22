const fs = require('fs');
const idl = require('../../target/idl/votingdapp.json');

fs.writeFileSync('.', JSON.stringify(idl));