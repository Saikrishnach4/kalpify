import { createDecipheriv, createCipheriv, randomBytes } from 'crypto';
import { stringify } from 'querystring';
import axios from 'axios';

const ENC_KEY = "zvjv0kwwzb2c2oxyhjoyex4hhukchlix";
const IV = randomBytes(12);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const userid = '4000215230';
  const password = 'Kalpify@2023!#';
  const method = 'TWO_FACTOR_AUTH';
  const v = '1.1';
  const phone_no = req.body.phoneNo;
  const msg = 'Your OTP code is %code%';
  const format = 'text';
  const otpCodeLength = '4';
  const otpCodeType = 'NUMERIC';
 console.log(phone_no)
  const queryParams = {
    password,
    method,
    v,
    phone_no,
    msg,
    format,
    otpCodeLength,
    otpCodeType,
  };

  const encryptedParams = encrypt(stringify(queryParams));
  console.log('Encrypted Params:', encryptedParams);

  const apiUrl = `https://enterprise.smsgupshup.com/GatewayAPI/rest?userid=${userid}&encrdata=${encodeURIComponent(encryptedParams)}`;

  try {
    const response = await axios.get(apiUrl);
    console.log(response.data);
    res.status(200).json({ message: 'OTP sent successfully' });
 
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error sending OTP' });
  }
}



const encrypt = (val) => {
  let cipher = createCipheriv('aes-256-gcm', ENC_KEY, IV);
  let encrypted = cipher.update(val, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
};
