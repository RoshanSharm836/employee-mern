const express = require("express");
const Employees = require("../model/data.schema");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await Employees.find();
    console.log("data", data);
    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req);
    const data = await Employees.create(req.body);
    return res.status(200).send({ data: data });
  } catch (error) {
    res.status(500).send(error.message);
  }
});
router.put("/:id", async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    await Employees.findByIdAndUpdate(req.params.id, req.body);
    const updateddata = await Employees.findById(req.params.id);

    return res.status(200).send(updateddata);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id);
    const data = await Employees.findByIdAndDelete(req.params.id);

    return res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
