import express from "express";
import cors from "cors";
import colors from "colors";
import session from "express-session";
import passport from "passport";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(passport.initialize());
app.use(passport.session());
app.use(
	session({
		secret: process.env.SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }
	})
);

const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log("Server connected".bgYellow);
});
