// import mongoose from "mongoose";
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["OWNER", "COLLABORATOR", "VIEWER"],
    default: "VIEWER"
  }
});

module.exports =  mongoose.model("User", userSchema)
// export default mongoose.model("User", userSchema);
