import mongoose from "mongoose";

const userSchema = new mongoose.Schema({}, { timestamps: true });

// create the model:
const User = mongoose.model("User", userSchema);

export default User;
