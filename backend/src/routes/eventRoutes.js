import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { 
  getUpcomingEvents,
  createEvent,
  registerForEvent,
} from '../controllers/eventController.js';

const router = express.Router();

router.get('/upcoming', protect, getUpcomingEvents);
router.post('/', protect, createEvent);
router.post('/:id/register', protect, registerForEvent);

export default router;