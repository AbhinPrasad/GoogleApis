import express from "express";
import cors from "cors";
import colors from "colors";
import session from "express-session";
import passport from "passport";
import multer from "multer";
import dotenv from "dotenv";
dotenv.config();

import authRoutes from "./routes/authRoute.js";
import uploadRoutes from "./routes/uploadRoute.js";
import { isLoggedIn } from "./middleware/authMiddleware.js";

const app = express();

//multer file size configuration -- 50 * 1024 * 1024 => 50MB in bytes.
const upload = multer({ limits: { fileSize: 50 * 1024 * 1024 } });

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }
	})
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({ origin: process.env.CLIENT_URL }));

app.use("/auth", authRoutes);
app.use("/upload", upload.single("file"), uploadRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log("Server connected".bgYellow);
});
