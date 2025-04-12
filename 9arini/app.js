import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import passport from 'passport';
import session from 'express-session';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import userRoutes from './routes/user.js';
import sessionRoutes from './routes/sessions.js';
import reviewRoutes from './routes/reviews.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import configurePassport from './config/passport.js';

dotenv.config();

const app = express();


app.use(cors({
  origin: 'http://localhost:3000', // change this to your frontend URL
  credentials: true
}));
app.use(express.json());

// Session setup
app.use(session({
  secret: process.env.SESSION_SECRET || 'some_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());
configurePassport(passport);

// MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);         // Points, level, profile info
app.use('/api/sessions', sessionRoutes);   // Teaching sessions (1-on-1 & group)
app.use('/api/reviews', reviewRoutes);     // Reviews and feedback
app.use('/api/analytics', analyticsRoutes); // Analytics for analysts
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
