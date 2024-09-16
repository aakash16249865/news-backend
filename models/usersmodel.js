import mongoose from "mongoose";
import con from "../db/db.js";


const  userschema = new mongoose.Schema({
    name: String,
    email: String,
    password : String,
    Role :{type:String ,default:'user'}
})
const User = con.model('User',userschema);
export default User;
