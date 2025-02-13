const fs = require('fs');

const conteudo = 'este é o conteúdo do meu arquivo';

fs.writeFile( 'arquivo.txt' , conteudo, err => {
    if (err) throw err;
    console.log('arquivo salvo')
})