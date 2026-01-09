import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/scatch')

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    contact: Number,
    isAdmin: Boolean,
    cart: {
        type: Array,
        default: []
    },
    orders: {
        type: Array,
        default: []
    },
    picture: String
})

const userModel  = mongoose.model('user',userSchema)
export default userModel

