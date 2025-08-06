import mongoose from 'mongoose';

const adminConfigSchema = new mongoose.Schema({
  step2: {
    type: [String],
    required: true,
    default: ['aboutMe','birthdate']
  },
  step3: {
    type: [String],
    required: true,
    default: ['address']
  }
}, { timestamps: true });

const AdminConfig = mongoose.model('AdminConfig', adminConfigSchema);

export default AdminConfig;