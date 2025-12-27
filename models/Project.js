// import mongoose from "mongoose";
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  role: String
});

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  owner: mongoose.Schema.Types.ObjectId,
  members: [memberSchema]
});

module.exports = mongoose.model("Project", projectSchema)
// export default mongoose.model("Project", projectSchema);
