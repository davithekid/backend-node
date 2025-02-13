const path = require('path');

const express /* caminho */ = path.join(__dirname, 'arquivo.txt');
console.log(express);

const nameFile = path.basename(express);
console.log(nameFile);

const extension = path.extname(express);
console.log(nameFile);      