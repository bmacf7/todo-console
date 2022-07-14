const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
  {
    description: { type: String, required: true },
    completed: { type: Boolean },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Task", taskSchema);
