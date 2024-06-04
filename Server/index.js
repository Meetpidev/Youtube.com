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

// const corsOptions = {
//   origin: 'http://localhost:5173/', 
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
// };

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

// const updateUsers = async () => {
//   try {
//     await User.updateMany(
//       { points: { $exists: false } }, 
//       { $set: { points: 0 } } 
//     );

//     console.log('Users updated successfully');
//     mongoose.disconnect();
//   } catch (error) {
//     console.error('Error updating users:', error);
//     // mongoose.disconnect();
//   }
// }
// updateUsers();

app.use("/user",userRoutes);
app.use("/video",videoRouts);


app.listen(port,() => {
    console.log(`Server Running on the Port: ${port}`)
})

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import bodyParser from "body-parser";
// import userRoutes from "./rotes/user.js";
// import videoRouts from "./rotes/video.js";
// import cors from "cors";
// import path from "path";
// import User from "./moduls/auth.js";

// if (process.env.NODE_ENV != "production") {
//     dotenv.config();
// }

// const port = process.env.PORT;
// const DB_URL = process.env.CONNECTION_URL;

// const corsOptions = {
//   origin: 'http://localhost:5173/', // allow requests from this origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 204
// };

// const app = express();
// app.use(cors(corsOptions));


// app.use(bodyParser.json());
// app.use(cors(corsOptions));
// app.use(express.json({limit:"30mb",extended: true}));
// app.use(express.urlencoded({limit:"30mb",extended: true}));
// app.use("/uploads",express.static(path.join("uploads")));



// main().then(() => {
//     console.log("Connection Successful..");
// })
//     .catch(err => console.log(err))

// async function main() {
//     await mongoose.connect(DB_URL);
// }

// const updateUsers = async () => {
//   try {
//     await User.updateMany(
//       { points: { $exists: false } }, 
//       { $set: { points: 0 } } 
//     );

//     console.log('Users updated successfully');
//     mongoose.disconnect();
//   } catch (error) {
//     console.error('Error updating users:', error);
//     // mongoose.disconnect();
//   }
// }
// updateUsers();

// app.use("/user",userRoutes);
// app.use("/video",videoRouts);


// app.listen(port,() => {
//     console.log(`Server Running on the Port: ${port}`)
// })   
