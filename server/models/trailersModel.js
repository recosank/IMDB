import mongoose from "mongoose";

const bannerModel = new mongoose.Schema({
    name:String,
    title:String,
    context:String,
    MImage:
    {
        data:Buffer
    },
    PImage:
    {
        data:Buffer
    },
    ratings:{
        type:[
            {
                _id:String,
                rating:Number
            }
        ],
        default:[]
    }
})

const bannerModelDb = mongoose.model('banner',bannerModel)

export default bannerModelDb;