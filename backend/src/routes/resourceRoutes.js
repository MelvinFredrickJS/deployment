import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getResources,
  createResource,
  getResourceById,
} from '../controllers/resourceController.js';

const router = express.Router();

router.get('/', protect, getResources);
router.post('/', protect, createResource);
router.get('/:id', protect, getResourceById);

export default router;