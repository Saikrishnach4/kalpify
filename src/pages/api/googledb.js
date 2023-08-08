
import User from '../../models/user'; 
import db from '../utils/mongodb'; 

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { googleId, firstName, lastName, email } = req.body;

    try {
    
      const existingUser = await User.findOne({ googleId });

      if (existingUser) {
        res.status(200).json({ message: 'User already exists' });
      } else {
       
        const user = new User({
          googleId,
          firstName,
          lastName,
          email,
         
        });

        await user.save();
        res.status(201).json({ message: 'User data saved successfully' });
      }
    } catch (error) {
      console.error('Error saving user data:', error);
      res.status(500).json({ error: 'An error occurred while saving user data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
