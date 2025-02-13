const  fs = require('fs');

const conteudo = 'os d foram criados'
fs.writeFile('../atividade/teste.txt', conteudo, err => {
    if(err) throw err;
    console.log('arquivo criado com sucesso')
})