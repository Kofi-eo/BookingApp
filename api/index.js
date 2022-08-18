import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Auth from "./routes/auth.js";

const app = express();

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

app.get("/", (req, res) => {
  res.send("hello first request");
});

//middlewares
app.use("/auth", Auth);

app.listen(8000, () => {
  connect();
  console.log("Connected to port 8000");
});
