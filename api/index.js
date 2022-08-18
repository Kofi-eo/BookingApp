import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Auth from "./routes/auth.js";
import Hotel from "./routes/hotels.js";
import Room from "./routes/rooms.js";
import User from "./routes/users.js";

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
app.use("/api/auth", Auth);
app.use("/api/hotels", Hotel);
app.use("/api/rooms", Room);
app.use("/api/users", User);

app.listen(8000, () => {
  connect();
  console.log("Connected to port 8000");
});
