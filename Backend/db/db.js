import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Connecting....");

    const connectionInstance = await mongoose.connect(
        process.env.MONGO_URI
    );

    // console.log(`MongoDB connected to : ${connectionInstance.connection.host}`);
    console.log("MongoDB connected successfully");

  } catch (error) {
    console.log(`"Error connecting to MongoDB": ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
