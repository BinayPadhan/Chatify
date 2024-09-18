import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Mongoose's connect() returns a promise, so 'await' should work here
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`\n MongoDB connected !!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("ERROR:", error);
        process.exit(1);  // Exit the process in case of failure
    }
};

export default connectDB;
