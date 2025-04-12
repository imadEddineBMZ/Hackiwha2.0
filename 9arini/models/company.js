// models/Company.js
import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
  name:          { type: String, required: true },
  contactEmail:  { type: String, required: true },
  features:      [String], // features selected by the company
  subscription:   { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
  stripeCustomer: { type: String },
  paypalClientId: { type: String },
  paypalSecret:   { type: String },
}, { timestamps: true });

export default mongoose.model('Company', companySchema);
