import users from "../moduls/auth.js";
import mongoose from "mongoose";

export const gpoints = async(req,res) => {
    try {
        const { userId } = req.body;
        const user = await users.findById(userId);

        if (!user) {
            return res.status(404).send('User not found');
          }
          user.points += 5;
          await user.save();

        res.json({ points: user.points });
        
      } catch (error) {
        res.status(500).json({ message: 'Server Error' });
      }
}

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