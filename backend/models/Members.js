const { model, Schema } = require("mongoose");

const memberSchema = new Schema({
  name: String,
  email: String,
  role: {
    type: String,
    enum: ["Member", "Admin", "Moderator"],
    default: "Member",
  },
  status: {
    type: String,
    enum: ["Active", "Inactive", "Pending"],
    default: "Active",
  },
  joined: String,
  id: Number,
});

module.exports = model("Members", memberSchema);
