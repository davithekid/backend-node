const fs = require('fs');

const newLine = '\nnova linha ';

fs.appendFile('arquivo.txt', newLine , err => {
    if(err) throw err;
    console.log('informação adicionada!!');
})
