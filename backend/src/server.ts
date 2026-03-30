import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import geminiApiRoute from "./geminiApiRoute";

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// this says "for all requests starting with /api/gemini, use geminiApiRoute router to handle it"
app.use("/api/gemini", geminiApiRoute);

// test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

