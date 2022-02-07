require('colors');

const mostrarMenu = () =>{
    console.clear();

    console.log('============================='.brightYellow);
    console.log('  Seleccione una opción '.brightYellow);
    console.log('=============================\n'.brightYellow);

    console.log(` ${'1'.green} Crear tarea`);
    console.log(` ${'2'.green} Listar tareas`);
    console.log(` ${'3'.green} Listar tareas completadas`);
    console.log(` ${'4'.green} Listar tareas pendientes`);
    console.log(` ${'5'.green} Completar tarea(s)`);
    console.log(` ${'6'.green} Borra tarea`);
    console.log(` ${'7'.green} Finalizar programa\n`);
}

module.exports = {
    mostrarMenu
}