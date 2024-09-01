import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("\n MongoDB connected !!!");
    } catch (error) {
        console.log("ERROR", error);
        process.exit(1);
        // throw error;
    }
}

export default connectDB;