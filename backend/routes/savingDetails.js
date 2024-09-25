const router = require("express").Router();

const SavingDetails = require("../models/SavingDetails");

router.get("/", async (req, res) => {
   try {
     await SavingDetails.find()
       .then((savingDetails) => res.json(savingDetails))
       .catch((err) => res.status(500).json("Error: " + err)); 
   } catch (error) {
    console.log(error.message);
   }   
}); 

router.post("/", async (req, res) => {
  try {
    const newSavingDetails = new SavingDetails(req.body);
    console.log("New Saving Details Data:", newSavingDetails);
    const savedSavingDetails = await newSavingDetails.save();
    res.status(201).json(savedSavingDetails);
  } catch (err) {
    console.error("Error saving saving details:", err);
    res
      .status(500)
      .json({ message: "Error saving saving details", error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
      const updatedSavingDetails = await SavingDetails.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedSavingDetails);
  } catch (err) {
    console.error("Error updating saving details:", err);
    res
      .status(500)
      .json({ message: "Error updating saving details", error: err.message });
  }
});


module.exports = router;