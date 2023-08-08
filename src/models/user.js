
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  email: String,
  
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
