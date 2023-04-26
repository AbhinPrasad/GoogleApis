import express from "express";
import passport from "passport";
import "../utils/passport.js";
import {
	loginFailed,
	loginSuccess,
	logout
} from "../controllers/authController.js";

const router = express.Router();

router.get(
	"/google",
	passport.authenticate("google", {
		scope: ["profile", "email", "https://www.googleapis.com/auth/drive.file"],
		prompt: "consent",
		accessType: "offline"
	})
);

router.get(
	"/google/callback",
	passport.authenticate("google", {
		// successRedirect: 
		failureRedirect: `${process.env.CLIENT_URL}/loginfailed`
	}),
	(req,res)=>{
		// console.log(req.user,"req.user");
		res.redirect(`${process.env.CLIENT_URL}/upload`,)
	}
);

// router.get("/login/failed", loginFailed);
// router.get("/login/success", loginSuccess);
router.get("/logout", logout);

export default router;
