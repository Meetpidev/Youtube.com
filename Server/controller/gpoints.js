// import users from "../moduls/auth.js";
// import mongoose from "mongoose";

// export const gpoints = async(req,res) => {
//     try {
//         const user = await users.findById(req.user.id);
//         res.json({ points: user.points });
//       } catch (error) {
//         res.status(500).json({ message: 'Server Error' });
//       }
// }

// export const ppoints = async(req,res) => {

//     const { points } = req.body;

//   try {
//     const user = await users.findById(req.user.id); 
//     user.points = points;
//     await user.save();
//     res.json({ message: 'Points updated successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server Error' });
//   }
// }