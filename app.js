const { mostrarMenu, pausa } = require("./helpers/mensajes");
require("colors");

const main = async () => {
  let opt = "";
  do {
    opt = await mostrarMenu();
    if (opt !== "0") await pausa();
  } while (opt != "0");
  console.clear();
};

main();
