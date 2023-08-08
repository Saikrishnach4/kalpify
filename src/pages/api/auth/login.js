import { getAuthorizationUrl } from '../../utils/auth';

export default async function handler(req, res) {
  try {
    const authUrl = await getAuthorizationUrl(); 

    res.redirect(authUrl);
  } catch (error) {
    console.error('Error getting authorization URL:', error);

    
   

    res.status(500).send('Error during login');
  }
}
