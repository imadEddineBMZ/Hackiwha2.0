import mongoose from 'mongoose';
const { Schema, model, Types } = mongoose;

const courseSchema = new Schema({
  title:       { type: String, required: true },
  description: String,
  instructor:  { type: Types.ObjectId, ref: 'User', required: true },
  tags:        [String],
  modules: [{
    moduleId:   { type: Types.ObjectId, ref: 'Module' },
    title:      String,
    order:      Number
  }],
  quizIds:     [{ type: Types.ObjectId, ref: 'Quiz' }],
  isPublished: { type: Boolean, default: false }
}, { timestamps: true });

export default model('Course', courseSchema);
export { courseSchema };