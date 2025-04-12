// routes/userRoutes.js
import express from 'express';
import {
  getUserProfile,
  updateUserProfile,
  getUserPoints,
  getUserLevel,
} from '../controllers/userController.js';

const router = express.Router();

// @route   GET /api/users/:id
// @desc    Get user profile
router.get('/:id', getUserProfile);

// @route   PUT /api/users/:id
// @desc    Update user profile
router.put('/:id', updateUserProfile);

// @route   GET /api/users/:id/points
// @desc    Get user points
router.get('/:id/points', getUserPoints);

// @route   GET /api/users/:id/level
// @desc    Get user level
router.get('/:id/level', getUserLevel);

export default router;