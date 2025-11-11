import passport from 'passport';
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import User, { IUser } from '../models/userModel';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: '/api/auth/google/callback',
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      try {
        // Check if user already exists with this email
        let user = await User.findOne({ email: profile.emails?.[0].value });

        if (user) {
          // User exists, return the user
          return done(null, user);
        }

        // Create new user if doesn't exist
        user = await User.create({
          name: profile.displayName,
          email: profile.emails?.[0].value,
          password: Math.random().toString(36).slice(-8) + 'A1!', // Random password (won't be used for Google login)
          age: 0, // Default value, user can update later
          bloodGroup: 'Unknown', // Default value
          gender: 'Other', // Default value
          profilePhoto: profile.photos?.[0].value,
        });

        return done(null, user);
      } catch (error) {
        return done(error as Error, undefined);
      }
    }
  )
);

passport.serializeUser((user: any, done: (err: any, id?: any) => void) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done: (err: any, user?: any) => void) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

export default passport;
