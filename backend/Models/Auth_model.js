import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Example constraint for minimum length
  },
  dob: {
    type: Date,
    required: true,
    validate: {
      validator: (value) => {
        return value <= new Date();
      },
      message: "Date of birth cannot be in the future."
    }
  },
  city: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model("User", userSchema);
