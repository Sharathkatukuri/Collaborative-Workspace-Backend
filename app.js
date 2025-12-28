const express = require("express");
const cors = require("cors");
const authRoutes= require("./routes/auth.routes.js");
const projectRoutes = require("./routes/project.routes.js");
const jobRoutes = require("./routes/job.routes.js");
const setupSwagger = require("./swagger.js");


const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "Collaborative Workspace Backend is running"
  });
});


setupSwagger(app);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong" });
});

module.exports = app;
