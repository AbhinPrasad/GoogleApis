import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: process.env.GOOGLE_CALLBACK_URL,
			scope: [
				"profile",
				"email",
				"https://www.googleapis.com/auth/drive.file"
			]
		},
		(accessToken, refreshToken, profile, cb) => {
			console.log(profile);
			console.log({ at: accessToken });
			console.log({ rt: refreshToken });
			return cb(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
