import mongoose from 'mongoose';

const learningGoalSchema = new mongoose.Schema({
  user:       { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  focusArea:  { type: String, required: true },
  progress:   { type: Number, min: 0, max: 100, default: 0 },
  lastUpdated:{ type: Date, default: Date.now }
});

export default mongoose.model('LearningGoal', learningGoalSchema);