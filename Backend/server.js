import connectDB from "./config/connectDB.js";
import express from "express";
import path from "path";
import dotenv from "dotenv";
import projectRoutes from "./routes/projectRoutes.js";
import { notFoundURL, errorHandler } from "./middleware/errorHandler.js";

dotenv.config();
connectDB(); // connect to MongoDB
const app = express();
const port = process.env.PORT;
const __dirname = path.resolve();

app.use("/api/projects", projectRoutes);

if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static(path.join(__dirname, "/Frontend/dist")));
  // any routes that is not api will be redirected to index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("...........Running API.........");
  });
}

app.use(notFoundURL);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
