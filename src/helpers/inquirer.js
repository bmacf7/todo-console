const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "Elige una opción",
    choices: [
      {
        value: "1",
        name: "1.- Crear tarea",
      },
      {
        value: "2",
        name: "2.- Mostrar tareas",
      },
      {
        value: "3",
        name: "3.- Eliminar tarea",
      },
      {
        value: "4",
        name: "4.- Mostrar tareas pendientes",
      },
      {
        value: "5",
        name: "5.- Completar tarea",
      },
      {
        value: "0",
        name: "0.- Salir",
      },
    ],
  },
];

const inquirerMenu = async () => {
  const { opcion } = await inquirer.prompt(menuOpts);
  return opcion;
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "pause",
      message: `\nPresiona ${"ENTER".green} para continuar\n`,
    },
  ];
  const opcion = await inquirer.prompt(question);
  return opcion;
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor, ingrese un valor";
        }
        return true;
      },
    },
  ];

  const { desc } = await inquirer.prompt(question);
  return desc;
};

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
};
