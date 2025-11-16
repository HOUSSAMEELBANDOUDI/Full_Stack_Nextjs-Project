import mongoose from "mongoose";

export interface User {
  _id: mongoose.Types.ObjectId;
  username: string;
  email: string;
  password: string; // Optional for responses, required for creation
}

const userSchema = new mongoose.Schema<User>(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  }
);

// Export the model
const UserModel = mongoose.model<User>("User", userSchema);
export default UserModel;


