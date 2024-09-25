const router = require("express").Router();

const Member = require("../models/Members");

router.get("/", async (req, res) => {
  await Member.find()
    .then((members) => res.json(members))
    .catch((err) => res.status(500).json("Error: " + err));
});

router.post("/", async (req, res) => {
  try {
    const newMember = new Member(req.body);
    console.log("New Member Data:", newMember);
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (err) {
    console.error("Error saving member:", err);
    res
      .status(500)
      .json({ message: "Error saving member", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMember);
  } catch (err) {
    console.error("Error updating member:", err);
    res
      .status(500)
      .json({ message: "Error updating member", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedMember);
  } catch (err) {
    console.error("Error updating member:", err);
    res
      .status(500)
      .json({ message: "Error updating member", error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedMember = await Member.findByIdAndDelete(req.params.id);
    res.json(deletedMember);
  } catch (err) {
    console.error("Error deleting member:", err);
    res
      .status(500)
      .json({ message: "Error deleting member", error: err.message });
  }
});


module.exports = router;
