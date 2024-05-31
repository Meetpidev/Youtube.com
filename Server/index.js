import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./rotes/user.js";
import videoRouts from "./rotes/video.js";
import cors from "cors";
import path from "path";

if (process.env.NODE_ENV != "production") {
    dotenv.config();
}

const port = process.env.PORT;
const DB_URL = process.env.CONNECTION_URL;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({limit:"30mb",extended: true}));
app.use(express.urlencoded({limit:"30mb",extended: true}));
app.use("/uploads",express.static(path.join("uploads")));

main().then(() => {
    console.log("Connection Successful..");
})
    .catch(err => console.log(err))

async function main() {
    await mongoose.connect(DB_URL);
}

app.use("/user",userRoutes);
app.use("/video",videoRouts);

app.listen(port,() => {
    console.log(`Server Running on the Port: ${port}`)
})

