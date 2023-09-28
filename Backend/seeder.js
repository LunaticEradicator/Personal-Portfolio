import connectDB from "./config/connectDB.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import projects from "./data/projects.js";
import Project from "./models/projectsModel.js";

dotenv.config();
connectDB();
const importData = async () => {
  await Project.deleteMany();
  try {
    const projectFind = await Project.insertMany(projects);
    console.log("Data Imported !".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Project.deleteMany();
    console.log("Data Destroyed !".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

// process.argv is used to add argument to node file
// node backend/seed.js -d  = >will add -d as its [2] argument

// when we run the script data: destroy
if (process.argv[2] === "-d") {
  destroyData();
  console.log(process.argv[2]);
} else {
  importData();
}
