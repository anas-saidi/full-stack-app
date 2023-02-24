import mongoose from "mongoose";
const connectDB = async () => {
  mongoose.set("strictQuery", true);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongoose Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    // exit process with failure
    process.exit(1);
  }
};
export default connectDB;
