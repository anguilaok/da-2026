import mongoose from "mongoose";

export default mongoose.model("users", {
  username: {type: String, unique: true,required: true},
  email: {type: String, unique: true,required: true},
  password: {type: String, required: true},
  displayName: {type: String, required: true},
  role: {type: String, required: true},
});