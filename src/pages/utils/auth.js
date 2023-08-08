import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

export async function getAuthorizationUrl() {
  const authUrl = client.generateAuthUrl({
    scope: ['https://www.googleapis.com/auth/userinfo.profile'],
    prompt: 'consent',
  });
  return authUrl;
}

export async function exchangeCodeForToken(code) {
  try {
    const { tokens } = await client.getToken(code);
    return tokens;
  } catch (error) {
    console.error('Error during token exchange:', error);
    throw error;
  }
}
