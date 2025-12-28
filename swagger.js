const swaggerUi = require("swagger-ui-express");

const swaggerDoc = {
  openapi: "3.0.0",
  info: {
    title: "Collaborative Workspace API",
    version: "1.0.0"
  }
};

const setupSwagger = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};

module.exports = setupSwagger
