import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ['one-on-one', 'workshop'], 
    required: true 
  },
  teacher: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  students: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }],
  startTime: { 
    type: Date, 
    required: true 
  },
  endTime: { 
    type: Date 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ],
}, { timestamps: true });

export default mongoose.model('Session', sessionSchema);
