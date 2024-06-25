import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = process.env.CONNECTION_STRING;
mongoose.connect(dbURI)
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log('Database connection error: ', err));
