import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String }, // Made optional
  name: {
    first: { type: String },      // Made optional
    last: { type: String }        // Made optional
  },
  role: {
    type: String,
    enum: ['student', 'instructor', 'admin', 'company'],
    default: 'student'
  },
  profile: {
    avatarUrl: String,
    bio: String,
    joinedAt: { type: Date, default: Date.now }
  },
  points: { type: Number, default: 0 },
  level: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  sessionsTaught: { type: Number, default: 0 },
  averageRating: { type: Number, default: 0 },
  learningInterests: [{ type: String }],
  teachingLanguages: [{ type: String }],
  location: { type: String },
  purchasedFeatures: [{ type: String }],
  analyticsData: {
    topLocations: [{ location: String, count: Number }],
    topLearningInterests: [{ language: String, count: Number }],
    topTeachingLanguages: [{ language: String, count: Number }]
  },
  settings: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
