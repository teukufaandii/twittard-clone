import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  connectMongoDB();
});
