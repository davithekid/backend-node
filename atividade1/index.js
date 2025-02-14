const os = require('os');
const fs = require('fs');
const { dir } = require('console');
const { json } = require('stream/consumers');

const plataforma = os.platform(), arquitetura = os.arch(), sos = os.type(), version = os.version(), diretorioUser = os.homedir(), rede = JSON.stringify(os.networkInterfaces(), null, 2),
cpu = JSON.stringify(os.cpus(), null, 2);  

const conteudo = ("plataforma: " + plataforma + '\n' +
    "arquitetura: " + arquitetura + "\n" +
    "sistema operacional: " + sos + '\n' +
    'versao: ' + version + '\n' +
    'diretorio de usuário: ' + diretorioUser + '\n' +
    'rede' + rede + '\n' +
    'cpu: ' + cpu

);
fs.writeFile('info_sistema.txt', conteudo, err => {
    if (err) throw err;
    console.log('arquivo criado com sucesso')
})
