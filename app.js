const fs = require('fs');
const argv = require('./config/yargs').argv
const colors = require('colors')
const max = argv.limite,
    tabla = argv.base

if (argv._.length) {
    let data = '\n'
    for (let i = 1; i <= max; i++) {
        data += `${tabla} x ${i} = ${tabla*i}\n`
    }
    for (valor of argv._) {
        switch (valor) {
            case 'listar':
                console.log(`Tabla del ${tabla}\n`.red, data);
                break
            case 'crear':
                fs.writeFile(`tablas/tabla_del_${tabla}.txt`, data, (err) => {
                    if (err) throw err;
                    console.log('Archivo creado!');
                });
                break
        }
    }
} else {
    console.log("No se especifico ningun comando, utilizar help para mas detalles");
}