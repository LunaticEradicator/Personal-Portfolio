import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    stack: [
      {
        type: String,
        required: true,
      },
    ],
    image: [
      {
        type: String,
        required: true,
      },
    ],
    git: {
      type: String,
      required: true,
    },
    live: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;
