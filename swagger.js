// swagger.js
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "User API",
    version: "1.0.0",
    description: "API endpoints to manage users and their details.",
  },
  servers: [
    {
      url: "https://nodejs-task-dug8.onrender.com/api/",
      //   description: "Local server",
    },
  ],
  apis: ["./routes/*.js"], // files containing annotations for the Swagger doc
};

// Options for the swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ["./routes/*.js"], // Path to your API routes
};

// Generate the swagger specification
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
