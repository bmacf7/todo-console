require("colors");
console.clear();

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("===========================".green);
    console.log("=  Selecciona una opción  =".green);
    console.log("===========================\n".green);

    console.log(`1.- Crear tarea`);
    console.log(`2.- Listar tareas`);
    console.log(`3.- Tareas completadas`);
    console.log(`4.- Tareas pendientes`);
    console.log(`5.- Completar tareas`);
    console.log(`6.- Borrar tareas`);
    console.log(`0.- Salir\n`);

    // Crear interfaz para mostrar y recibir información del usuario.
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Selecciona una opción: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

// Interfaz para pausar la ventana.
const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresiona ${"ENTER".green} para continuar\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

// Exportacion de funciones a app.js
module.exports = {
  mostrarMenu,
  pausa,
};
