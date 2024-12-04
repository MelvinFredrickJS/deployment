import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  department: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: Number,
    required: true,
  },
  connections: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
  eventsAttended: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
  }],
  resourcesShared: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resource',
  }],
}, {
  timestamps: true,
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', userSchema);