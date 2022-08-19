import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    pfimg:{
        data:Buffer
    }
})

const userDb = mongoose.model('userdb',userSchema)

export default userDb;