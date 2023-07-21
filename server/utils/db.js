import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URL);
        console.log(`data base is connect on ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit();
    }
};
