import User from '../moduls/auth.js';

export const gpoints = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send('User not found');
    }
    
    user.points += 5;
    await user.save();

    res.json({ points: user.points });
  } catch (error) {
    alert(error);
    res.status(500).json({ message: 'Server Error' });
  }
};
