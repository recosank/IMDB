import mongoose from "mongoose";

const avatarSchema = mongoose.Schema({
    name:String,
    AImage:{
        data:Buffer
    }
})

const avatarDb = mongoose.model('avatardb',avatarSchema);

export default avatarDb