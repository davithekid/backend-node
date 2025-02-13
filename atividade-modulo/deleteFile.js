const fs = require('fs');

fs.unlink ('../atividade/teste.txt' , err =>{
    if (err) throw err;
    console.log("arquivo deletado com sucesso!")
})