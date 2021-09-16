import passport from "passport";
import LocalStrategy from "passport-local";
import comparePassword from "../utils/security/tokens"
import db from "../db/models";

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

passport.use(
new LocalStrategy.Strategy(
{ usernameField: "email",session: false },
async (email, password, done) => {
try {
let [user] = await db.Users.FindOneByEmail(email);
if (user && comparePassword(user.password)) {
done(null, user);
} else {
    done(null, false);
}
} catch(e) {
    done(e);
}
}
)
);