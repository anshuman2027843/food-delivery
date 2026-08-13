import mongoose from "mongoose";

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/food-del";
    try {
        await mongoose.connect(uri);
        console.log("DB Connected successfully");
    } catch (error) {
        console.error("MongoDB Connection Failed:", error.message);
        console.error("Please ensure MongoDB is running locally or set MONGODB_URI in backend/.env");
    }
}
