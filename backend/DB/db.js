import mongoose from 'mongoose';

const dbURI = 'mongodb+srv://kartikkokli96:96kartik96@cluster0.niiu9b7.mongodb.net/MERN-Web?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(dbURI);
    console.log("Database connected successfully");

  } catch (error) {
    console.log(`Error while connecting DB ${error}`);
  }
}

export default connectDB;