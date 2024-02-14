import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    cname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum password length
    },
});
const userModel = mongoose.model('userdata', userSchema);
export default userModel;
