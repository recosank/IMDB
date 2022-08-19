import mongoose from "mongoose";

const watchlistSchema = mongoose.Schema({
    user:String,
    list:[]
})

const watchlistDb = mongoose.model('watchlistdb',watchlistSchema)

export default watchlistDb