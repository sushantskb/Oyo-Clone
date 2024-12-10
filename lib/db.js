import mongoose from "mongoose";
const connDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "OYO",
    });
    console.log("DB Connected..");
  } catch (error) {
    console.log("Error in db connection", error);
  }
};

export default connDB;
