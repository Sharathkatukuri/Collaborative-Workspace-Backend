// import mongoose from "mongoose";
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  type: String,
  status: {
    type: String,
    enum: ["PENDING", "RUNNING", "DONE", "FAILED"],
    default: "PENDING"
  },
  retries: { type: Number, default: 0 }
});

module.exports = mongoose.model("Job", jobSchema)
// export default mongoose.model("Job", jobSchema);
