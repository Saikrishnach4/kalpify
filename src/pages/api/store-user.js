// pages/api/store-user.js
import { insertData } from '../utils/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const userData = JSON.parse(req.body);
    console.log("userdata hello",userData)
    await insertData(userData);
    res.status(200).json({ message: 'User data stored successfully' });
  } catch (error) {
    console.error('Error storing user data:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
