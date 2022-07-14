require("colors");

const { connectDB } = require("./src/db");
const { menuOpt } = require("./src/handler");
const { inquirerMenu, pausa } = require("./src/helpers/inquirer");

const main = async () => {
  let opt = "";
  await connectDB();
  do {
    opt = await inquirerMenu();
    await menuOpt(opt);
    await pausa();
  } while (opt != "0");
};

main();
