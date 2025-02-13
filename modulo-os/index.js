// importar módulos em primeiro lugar
const os = require('os');
console.log(`plataforma: ${os.platform()}`);
console.log(`Arquitetura: ${os.arch()}`);
// console.log(`informação: ${os.cpus()}`); // crase limita a qtd de objetos

console.log('informação' , os.cpus());


console.log('Diretório do Usuário: ' , os.homedir())
console.log('Sistema Operacional: ', os.type());
console.log('Versão do Sistema: ' , os.version())
console.log('Interfaces de Rede: ' , os.networkInterfaces());