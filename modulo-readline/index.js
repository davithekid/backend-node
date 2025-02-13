const readline = require('readline').createInterface({

    input: process.stdin,
    output: process.stdout
});

readline.question('say my name: ', nome => {
    console.log(`olá, ${nome}`)
    readline.close();
})
