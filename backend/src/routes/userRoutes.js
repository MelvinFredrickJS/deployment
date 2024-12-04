import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  loginUser,
  registerUser,
  getDashboardStats,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/dashboard-stats', protect, getDashboardStats);

export default router;