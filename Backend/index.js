// const express = require("express");
// const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/route.book.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();
app.use(cors());
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDBURI;

// Connect to mongodb
try {
  mongoose.connect(URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

// defining routes
app.use("/api/books", bookRoute);
app.use("/api/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
