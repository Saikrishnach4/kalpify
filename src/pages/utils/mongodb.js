// db.js
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://nusrat:dcs_02@cluster0.r4xf9lu.mongodb.net/kalpify?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});
