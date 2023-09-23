import express from "express";
import { getAllProject } from "../controller/projectController.js";

const router = express.Router();
router.get("/", getAllProject);

export default router;
