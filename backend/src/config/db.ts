import mongoose from "mongoose";

export const connectDB = async()=>{
    const MONGO_URL = process.env.MONGO_URL as string;
    if(!MONGO_URL){
        throw new Error("Mongo Connection url not defined in env variables");
    }

    try{
        await mongoose.connect(MONGO_URL);
        console.log("MongoDb connected successfully");

    }
    catch(err){
        console.error('Mongodb connection failed:',err);
        process.exit(1);
    }

}