const Job = require("../models/Job.js");

const processJob = async (jobId) => {
  const job = await Job.findById(jobId);

  if (!job || job.status === "DONE") return;

  try {
    job.status = "RUNNING";
    await job.save();

    await new Promise((r) => setTimeout(r, 2000));

    job.status = "DONE";
    await job.save();
  } catch {
    job.retries += 1;
    job.status = job.retries > 3 ? "FAILED" : "PENDING";
    await job.save();
  }
};

module.exports = processJob;
