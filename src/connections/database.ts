import mongoose from "mongoose";

export default () => {
    const uri =  "mongodb://localhost:27017/unani_admin-panel";
  mongoose.set("strictQuery", false);

  mongoose 
    .connect(uri) 
    .then(() => {
      console.log( 'database connected');
    })
    .catch((err) => {
      console.log(`Database connection failed : ${err}`);
    });
};