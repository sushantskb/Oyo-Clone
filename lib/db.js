import mongoose from "mongoose";
const connDB = async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: "OYO",
  });
  console.log("DB Connected..");
};

export default connDB;
