import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getConnections,
  sendConnectionRequest,
  acceptConnection,
} from '../controllers/connectionController.js';

const router = express.Router();

router.get('/', protect, getConnections);
router.post('/request/:id', protect, sendConnectionRequest);
router.post('/accept/:id', protect, acceptConnection);

export default router;