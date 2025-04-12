// routes/sessionsRoutes.js
import express from 'express';
import {
  createSession,
  getSession,
  updateSession,
  deleteSession,
  getAllSessions,
} from '../controllers/sessionController.js';

const router = express.Router();

// @route   POST /api/sessions
// @desc    Create a new session
router.post('/', createSession);

// @route   GET /api/sessions/:id
// @desc    Get session details by ID
router.get('/:id', getSession);

// @route   PUT /api/sessions/:id
// @desc    Update session details by ID
router.put('/:id', updateSession);

// @route   DELETE /api/sessions/:id
// @desc    Delete a session by ID
router.delete('/:id', deleteSession);

// @route   GET /api/sessions
// @desc    Get all sessions
router.get('/', getAllSessions);

export default router;
