// models/Review.js
import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  session: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Session', 
    required: true 
  },
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  rating: { 
    type: Number, 
    min: 1, 
    max: 5, 
    required: true 
  },
  comment: { 
    type: String, 
    required: false 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

// Create the model for Review
export default mongoose.model('Review', reviewSchema);
