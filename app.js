require('colors'); //PAquete de terceros

const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async() => {
     mostrarMenu();
     pausa();
}

main()