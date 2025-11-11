import passport from 'passport';
import { Strategy as GoogleStrategy, Profile, VerifyCallback } from 'passport-google-oauth20';
import User, { IUser } from '../models/userModel';

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      callbackURL: `${process.env.BACKEND_URL || 'http://localhost:5000'}/api/auth/google/callback`,
    },
    async (accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) => {
      try {
        // Check if user already exists with this email
        let user = await User.findOne({ email: profile.emails?.[0].value });

        if (user) {
          // User exists, only update photo if user doesn't have a custom uploaded photo
          // (Custom photos are base64 strings, Google photos are URLs)
          const googlePhoto = profile.photos?.[0].value;
          const hasCustomPhoto = user.profilePhoto && user.profilePhoto.startsWith('data:image');
          
          // Only update if Google has a real photo and user doesn't have custom photo
          if (googlePhoto && !googlePhoto.includes('default-user') && !hasCustomPhoto) {
            user.profilePhoto = googlePhoto;
            await user.save();
          }
          return done(null, user);
        }

        // Create new user if doesn't exist
        const googlePhoto = profile.photos?.[0].value;
        const hasRealGooglePhoto = googlePhoto && !googlePhoto.includes('default-user');
        
        user = await User.create({
          name: profile.displayName,
          email: profile.emails?.[0].value,
          password: Math.random().toString(36).slice(-8) + 'A1!', // Random password (won't be used for Google login)
          age: 0, // Default value, user can update later
          bloodGroup: 'Unknown', // Default value
          gender: 'Other', // Default value
          // Use Google photo if available, otherwise leave undefined (frontend will show default icon)
          profilePhoto: hasRealGooglePhoto ? googlePhoto : undefined,
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
