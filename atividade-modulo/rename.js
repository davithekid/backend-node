const fs = require('fs');

fs.rename('renomear.js' , "rename.js", err=> {

    if(err) throw err;
    console.log("arquivo renomeado com sucesso!")
})