const fs = require('fs');

fs.rmdir('atividade' , err => {
    if(err) throw err;
    console.log("diretório removido com sucesso!")
})