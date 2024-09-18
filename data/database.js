import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Database Connected with ${c.connection.host}`))
    .catch((e) => {
      console.error("Database connection failed", e);
      process.exit(1); // Terminate the app if DB connection fails
    });
    
};