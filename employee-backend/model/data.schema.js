const mongoose = require("mongoose");

const dataschema = new mongoose.Schema(
  {
    employees_name: { type: String, required: true },
    departments: { type: String, required: true },
    salary: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Employees = mongoose.model("Employee_data", dataschema);
module.exports = Employees;
