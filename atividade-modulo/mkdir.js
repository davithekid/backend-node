const fs = require('fs');

fs.mkdir ('atividade', err => {

    if(err) throw err;
    console.log("diretírio criado com sucesso")

}) 