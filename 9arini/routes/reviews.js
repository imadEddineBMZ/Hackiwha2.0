// routes/reviewsRoutes.js
import express from 'express';
import {
  createReview,
  getReviewsForSession,
  updateReview,
  deleteReview,
} from '../controllers/reviewController.js';

const router = express.Router();

// @route   POST /api/reviews
// @desc    Create a new review for a session
router.post('/', createReview);

// @route   GET /api/reviews/session/:sessionId
// @desc    Get all reviews for a specific session
router.get('/session/:sessionId', getReviewsForSession);

// @route   PUT /api/reviews/:id
// @desc    Update a review by ID
router.put('/:id', updateReview);

// @route   DELETE /api/reviews/:id
// @desc    Delete a review by ID
router.delete('/:id', deleteReview);

export default router;
