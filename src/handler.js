const { leerInput } = require("./helpers/inquirer");
const { addTask, listTasks } = require("./controllers/task.controller");

const menuOpt = async (opt) => {
  switch (opt) {
    case "1":
      const task = {
        description: await leerInput("Descripción: "),
        completed: false,
      };
      addTask(task);
      break;
    case "2":
      await listTasks();
  }
};

module.exports = {
  menuOpt,
};
