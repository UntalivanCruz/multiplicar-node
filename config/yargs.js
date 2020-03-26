const opciones = {
    base: {
        demand: true,
        alias: "b"
    },
    limite: {
        alias: "l",
        default: 10
    }
}
const argv = require('yargs').command(
    'listar', 'Mostrar en consola la tabla de multiplicar', opciones
).command(
    'crear', 'Crear un archivo con los resultados', opciones
).help().argv

module.exports = {
    argv
}