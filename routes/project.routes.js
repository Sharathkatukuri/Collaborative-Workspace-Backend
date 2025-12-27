// import express from "express";
// import Project from "../models/Project.js";
// import auth from "../middleware/auth.js";
// import roles from "../middleware/roles.js";

const express = require("express");
const Project = require("../models/Project.js");
const auth = require("../middleware/auth.js");
const roles = require("../middleware/roles.js");


const router = express.Router();

router.post("/", auth, roles("OWNER"), async (req, res) => {
  const project = await Project.create({
    name: req.body.name,
    owner: req.user.id,
    members: [{ userId: req.user.id, role: "OWNER" }]
  });

  res.status(201).json(project);
});

router.get("/", auth, async (req, res) => {
  const projects = await Project.find({
    "members.userId": req.user.id
  });

  res.json(projects);
});

module.exports = router;
// export default router;
