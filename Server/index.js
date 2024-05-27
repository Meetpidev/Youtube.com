import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

if (process.env.NODE_ENV != "production") {
    dotenv.config();
}

const app = express();
const port = process.env.PORT;
const DB_URL = process.env.CONNECTION_URL;

main().then(() => {
    console.log("Connection Successful..");
})
    .catch(err => console.log(err))

async function main() {
    await mongoose.connect(DB_URL);
}

app.use("/",(req,res) => {
    res.send("hellow");
})

app.listen(port,() => {
    console.log(`Server Running on the Port: ${port}`)
})

