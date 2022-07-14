const Task = require("../models/Task");
const { connection } = require("../db");

const addTask = async (task) => {
  await Task.create(task);
  await connection.close();
};

const listTasks = async () => {
  const tasks = await Task.find();
  console.log(tasks);
  await connection.close();
};

module.exports = {
  addTask,
  listTasks,
};
