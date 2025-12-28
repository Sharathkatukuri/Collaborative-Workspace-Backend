const express = require("express");
const Job = require("../models/Job.js");
const redis = require("../config/redis.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const job = await Job.create({ type: "CODE_EXECUTION" });

  await redis.lPush("jobs", job._id.toString());

  res.status(202).json(job);
});

router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

module.exports = router;
