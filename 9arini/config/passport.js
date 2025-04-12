import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/user.js';

export default function configurePassport(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'http://localhost:5000/api/auth/google/callback',
    scope: ['profile', 'email']
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      
      if (!user) {
        // S'assurer que profile.emails existe avant d'y accéder
        const email = profile.emails && profile.emails.length > 0 
          ? profile.emails[0].value 
          : `${profile.id}@googleuser.com`;
          
        const avatar = profile.photos && profile.photos.length > 0
          ? profile.photos[0].value
          : undefined;
          
        user = await User.create({
          googleId: profile.id,
          name: profile.displayName || 'Google User',
          email: email,
          avatar: avatar
        });
      }
      
      return done(null, user);
    } catch (error) {
      console.error('Error in Google strategy:', error);
      return done(error, null);
    }
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
}