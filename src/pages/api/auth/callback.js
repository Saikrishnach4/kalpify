import { exchangeCodeForToken } from '../../utils/auth';

export default async function handler(req, res) {
  const code = req.query.code;

  try {
    const token = await exchangeCodeForToken(code);


    res.setHeader('Set-Cookie', `access_token=${token.access_token}; Path=/`);

  
    
    res.redirect('/');
    
  } catch (error) {
    console.error('Error exchanging code for token:', error);
 
    res.status(500).send('Error during login');
  }

}
