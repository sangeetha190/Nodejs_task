const express = require("express");
const { swaggerUi, swaggerSpec } = require("./swagger");
const app = express();

// Access the env variable
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnect");
const cors = require("cors");
const apiRouter = require("./routes");

connectDB();

app.use(cors());
app.use(express.json());

// Serve the OpenAPI documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api", apiRouter);
app.get("/", (req, res) => res.send("API is running !!!!"));

const PORT = process.env.PORT || 4000; // Use the PORT environment variable if available, otherwise default to 4000
app.listen(PORT, () => console.log("APP is connected on PORT", PORT));
