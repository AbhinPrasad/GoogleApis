import express from "express";
import { uploadFile } from "../controllers/uploadController.js";
import { isLoggedIn } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", uploadFile);

export default router;
