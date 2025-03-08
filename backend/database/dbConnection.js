import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/MERN_JOB_SEEKING_WEBAPP") 
    .then(() => console.log("Connected to database."))
    .catch((err) => console.log(`Some Error occurred: ${err}`));
};
