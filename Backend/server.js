import connectDB from "./config/connectDB.js";
import express from "express";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import { notFoundURL, errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
connectDB(); // connect to MongoDB
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(".......API is Running........");
});

app.use("/api/projects", projectRoutes);

app.use(notFoundURL);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
