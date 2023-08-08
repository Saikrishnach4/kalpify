// pages/api/facebook-login.js
import User from '../../models/user';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { facebookId, firstName, lastName, email } = req.body;

    try {
     
      const existingUser = await User.findOne({ facebookId });

      if (existingUser) {
        res.status(200).json({ message: 'Facebook user already exists' });
      } else {
     
        const user = new User({
          provider: 'facebook',
          facebookId,
          firstName,
          lastName,
          email,
          
        });

        await user.save();
        res.status(201).json({ message: 'Facebook user data saved successfully' });
      }
    } catch (error) {
      console.error('Error saving Facebook user data:', error);
      res.status(500).json({ error: 'An error occurred while saving Facebook user data' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
