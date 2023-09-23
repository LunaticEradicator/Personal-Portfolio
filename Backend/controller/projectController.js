import { asyncHandler } from "../middleware/asyncHandler.js";
import Project from "../models/projectsModel.js";

// @Desc to get all Project
// @Route GET '/API/projects'
// @Access PUBLIC
const getAllProject = asyncHandler(async (req, res) => {
  const projects = await Project.find({});
  res.json(projects);
});

export { getAllProject };
