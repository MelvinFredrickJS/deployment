import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

// Route imports
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import connectionRoutes from './routes/connectionRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/connections', connectionRoutes);
app.use('/api/resources', resourceRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});