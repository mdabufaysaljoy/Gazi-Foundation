const { Schema, model } = require("mongoose");

const savingDetailsSchema = new Schema({
  totalSavings: Number,
  monthlyContributions: Number,
  yearEndProjection: Number,
  tillDateNow: String,
  estematedNextYear: String,
});

module.exports = model("SavingDetails", savingDetailsSchema);