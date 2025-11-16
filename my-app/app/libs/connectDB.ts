import mongoose from "mongoose";

const url = process.env.MONGODB_URI as string;

export default async function connectDB() {
    try {
        await mongoose.connect(url);
        console.log("Connected to Mongo!");
    } catch (error) {
        console.log("Failed to connect to MongoDB:", error);
    }
}
