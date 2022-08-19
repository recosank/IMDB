import mongoose from "mongoose";

const todaySchema = mongoose.Schema({
    title:String,
    FImage:{
        data:Buffer
    }
})

const todayModelDb = mongoose.model('featured',todaySchema)

export default todayModelDb;